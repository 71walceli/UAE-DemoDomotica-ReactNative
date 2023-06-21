import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Piso0 } from './Piso0';
import { Piso1 } from './Piso1';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { About } from './About';


export const AppContext = React.createContext()

export default function App() {
  const Tabs = createBottomTabNavigator()
  const [piso, setPiso] = React.useState(0)
  const [controls, setControls] = React.useState({
    ascensor: 0,
    banio_p0: 1,
    comedor_p0: 1,
    cocina: 1,
    sala_p0: 1,
    balcon: 1,
    habitacion_invitados: 1,
    closet: 1,
    banio_p1: 1,
    comedor_p1: 1,
    cocina: 1,
    sala_p1: 1,
    banio_p1_2: 1,
    habitacion_principal: 1,
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

  return <>
    <AppContext.Provider value={{ controls, handleControlChange }}>
      <View style={{ width: "100%", alignItems: "center", flexDirection: "column", display: "flex" }}>
        <View style={{ width: "100%", height: "100%" }}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Tabs.Navigator
              initialRouteName="Feed"
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
                name="Piso 1"
                component={Piso1}
                options={{
                  tabBarLabel: 'Piso 1',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="numeric-1-box" color={color} size={size} />
                  ),
                }}
              />
              <Tabs.Screen
                name="Acerca de..."
                component={About}
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


