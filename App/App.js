import { StatusBar } from 'expo-status-bar';
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
    ascensor: false,
    banio_p0: true,
    comedor_p0: true,
    cocina: true,
    sala_p0: true,
    balcon: true,
    habitacion_invitados: true,
    closet: true,
    banio_p1: true,
    comedor_p1: true,
    sala_p1: true,
    banio_p1_2: true,
    habitacion_principal: true,
  })
  const [config, setConfig] = React.useState({
    apiAddress: "1.1.1.1",
  })
  
  const handleControlChange = (control, value) => {
    setControls(actualValues => {
      console.log({[control]: value})
      return ({
        ...actualValues,
        [control]: value
      });
      // TODO LLamar API
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
          <StatusBar style="auto" />
          <NavigationContainer>
            <Tabs.Navigator
              initialRouteName="Planta Baja"
              screenOptions={{
                tabBarActiveTintColor: '#e91e63',
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
}


