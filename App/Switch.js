import { Switch as RNSwitch } from 'react-native-switch';
import lightBulbOn from "./Assets/lightBulbOn.png"
import lightBulbOff from "./Assets/lightBulbOff.png"
import { Image } from "react-native"
import React from 'react';
import { AppContext } from './App';

export const Switch = ({controlId, innerCircleContent, ...props}) => {
  const {controls, handleControlChange} = React.useContext(AppContext)

  return <>
    <RNSwitch
      disabled={false}
      activeText={'ON'}
      inActiveText={'OFF'}
      renderInsideCircle={() => innerCircleContent}
      value={controls?.[controlId]} onValueChange={v => handleControlChange(controlId, v)}
      {...props}
    /> 
  </>  
}

export const LightbulbSwitch = ({controlId, ...props}) => {
  const {controls} = React.useContext(AppContext)

  return <>
    <Switch
      controlId={controlId}
      innerCircleContent={<Image 
        style={{ width: 24, height: 24 }} 
        source={{uri: controls[controlId] ? lightBulbOn : lightBulbOff}}
        {...props}
      />}
    /> 
  </>  
}
export const AscensorSwitch = ({controlId, ...props}) => {
  const {controls} = React.useContext(AppContext)

  return <>
    <Switch 
      activeText='P1'
      inActiveText='PB'
      controlId={controlId}
    /> 
  </>  
}
