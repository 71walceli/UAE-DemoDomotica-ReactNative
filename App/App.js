import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Piso0 } from './Piso0';
import { Piso1 } from './Piso1';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export const AppContext = React.createContext()

export default function App() {
  const tabs = createBottomTabNavigator()
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
    })
  }

  return <>
    <AppContext.Provider value={{ controls, handleControlChange }}>
      <View style={{ width: "100%", alignItems: "center", flexDirection: "column", display: "flex" }}>
        <View style={{ width: "100%", height: "100%" }}>
          <StatusBar style="auto" />
          {piso ? <Piso1 /> : <Piso0 />}
        </View>
      </View>
    </AppContext.Provider>
  </>
}


