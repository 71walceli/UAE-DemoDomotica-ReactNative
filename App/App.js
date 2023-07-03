import { StyleSheet, View } from 'react-native';
import { Piso0 } from './Piso0';
import { Piso1 } from './Piso1';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Config } from './Config';


export const AppContext = React.createContext()

export default function App() {
  const Tabs = createBottomTabNavigator()
  const [controls, setControls] = React.useState({
    ascensor: 0,
    balcon: 1,
    cocina: 1,
    comedor: 1,
    habInvitado: 1,
    habPrincipal: 1,
    sala: 1,
    puerta: 0,
  })
  const [config, setConfig] = React.useState({
    apiAddress: "192.168.0.100",
  })
  
  const [ready, setReady] = React.useState(false)
  React.useState(() => {
    if (ready)
      return
    setReady(true)
    loadState()
    const timeout = setInterval(() => {
      loadState();
    }, 5000)
    return () => clearInterval(timeout)
  }, [ready])

  const handleControlChange = (control, value, onCooldown) => {
    const numberValue = Number(value);
    const fetchUrl = 
      ["balcon","cocina","comedor","habInvitado","habPrincipal","sala",].includes(control)
        && `http://${config.apiAddress}/luz?nombre=${control}&estado=${numberValue}`
      || ["ascensor",].includes(control) 
        && `http://${config.apiAddress}/ascensor?piso=${1+numberValue}`
      || ["puerta",].includes(control) 
        && `http://${config.apiAddress}/${value ? "abrirPuerta" : "cerrarPuerta"}`
    if (!fetchUrl) return
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw new Error(data.message)
        }
        else {
          setControls(actualValues => {
            console.log({[control]: value})
            if (!onCooldown && control === "ascensor") {
              setTimeout(() => handleControlChange(control, !value, true), 15000)
            }
            else if (!onCooldown && control === "puerta") {
              setTimeout(() => handleControlChange(control, !value, true), 7000)
            }
            return ({
              ...actualValues,
              [control]: value
            });
          })
        }
      })
  }

  const styles = StyleSheet.create({
    centerElements: { alignItems: "center", flexDirection: "column", width: "100%", },
    fullSize: { height: "100%", width: "100%" },
  })
  return <>
    <AppContext.Provider value={{ controls, handleControlChange, config, setConfig }}>
      <View style={styles.centerElements}>
        <View style={styles.fullSize}>
          {/* <StatusBar style="auto" /> */}
          <NavigationContainer>
            <Tabs.Navigator
              initialRouteName="Planta Baja"
              screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                //headerStyle: { color: "red" },
              }}
            >
              <Tabs.Screen
                name="Planta Baja"
                component={Piso0}
                options={{
                  tabBarLabel: 'Planta Baja',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="numeric-0-box" color={color} size={size} />
                  ),
                }}
              />
              <Tabs.Screen
                name="Piso true"
                component={Piso1}
                options={{
                  tabBarLabel: 'Piso true',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="numeric-1-box" color={color} size={size} />
                  ),
                }}
              />
              <Tabs.Screen
                name="Configuracióón"
                component={Config}
                options={{
                  tabBarLabel: 'Acerca de...',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="beaker-question" color={color} size={size} />
                  ),
                }}
              />
            </Tabs.Navigator>
          </NavigationContainer>
          {/* {piso ? <Piso1 /> : <Piso0 />} */}
        </View>
      </View>
    </AppContext.Provider>
  </>

  function loadState() {
    fetch(`http://${config.apiAddress}`)
      .then(response => response.json())
      .then(response => setControls(() => {
        const _state = {...response.state};
        _state.ascensor -=  1
        return _state;
      }))
      .catch(console.error);
  }
}


