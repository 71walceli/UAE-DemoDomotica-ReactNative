import { Switch as RNSwitch, Text, View } from 'react-native';
import { lightBulbOff, lightBulbOn } from './Assets';
import { Image, StyleSheet } from "react-native"
import React from 'react';
import { AppContext } from './App';
import PropTypes from 'prop-types';


export const Switch = ({controlId, innerCircleContent, ...props}) => {
  const {controls, handleControlChange} = React.useContext(AppContext)

  return <>
    <RNSwitch
      disabled={false}
      activeText='ON'
      inActiveText='OFF'
      renderInsideCircle={() => innerCircleContent}
      value={Boolean(controls?.[controlId])} 
      onValueChange={v => handleControlChange(controlId, Number(v))}
      {...props}
    /> 
  </>  
}
Switch.propTypes = {
  controlId: PropTypes.string.isRequired,
  innerCircleContent: PropTypes.element,
}

export const LightbulbSwitch = ({controlId, ...props}) => {
  const {controls} = React.useContext(AppContext)
  const style = StyleSheet.create({
    lightbulbSwitch: { width: 16, height: 16 }
  })

  const iconOn = <Image
    style={StyleSheet.compose(style.lightbulbSwitch)}
    source={lightBulbOn} 
  />;
  const iconOff = <Image
    style={StyleSheet.compose(style.lightbulbSwitch)}
    source={lightBulbOff} 
  />;
  return <View style={StyleSheet.compose({ display: "flex", flexDirection: "column", alignItems: "center" })}>
    <Switch
      controlId={controlId}
      {...props}
    /> 
    {controls[controlId] && iconOn || iconOff}
  </View>
}
LightbulbSwitch.propTypes = {
  controlId: PropTypes.string.isRequired,
}

export const AscensorSwitch = ({controlId, ...props}) => {
  const {controls} = React.useContext(AppContext)
  
  return <View style={StyleSheet.compose({ display: "flex", flexDirection: "column", alignItems: "center" })}>
    <Switch
      controlId={controlId}
      {...props}
    />
    <Text>{controls[controlId] && "Piso 1" || "Planta Baja"}</Text> 
  </View>
}

export const PuertaSwitch = ({controlId, ...props}) => {
  const {controls} = React.useContext(AppContext)
  
  return <View style={StyleSheet.compose({ display: "flex", flexDirection: "column", alignItems: "center" })}>
    <Switch
      controlId={controlId}
      {...props}
    />
    <Text>{!controls[controlId] && "Cerrada" || "Abierta"}</Text> 
  </View>
}
AscensorSwitch.propTypes = {
  controlId: PropTypes.string.isRequired,
}

