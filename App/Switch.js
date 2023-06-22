import { Switch as RNSwitch } from 'react-native-switch';
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
      activeText={'ON'}
      inActiveText={'OFF'}
      renderInsideCircle={() => innerCircleContent}
      value={controls?.[controlId]} 
      onValueChange={v => handleControlChange(controlId, v)}
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
    lightbulbSwitch: { width: 24, height: 24 }
  })

  return <>
    <Switch
      controlId={controlId}
      innerCircleContent={<Image 
        style={StyleSheet.compose(style.lightbulbSwitch)} 
        source={`${controls?.[controlId] ? lightBulbOn : lightBulbOff}`}
        />}
      {...props}
    /> 
  </>  
}
LightbulbSwitch.propTypes = {
  controlId: PropTypes.string.isRequired,
}

export const AscensorSwitch = ({controlId, ...props}) => {
  return <>
    <Switch 
      activeText='P1'
      inActiveText='PB'
      controlId={controlId}
      {...props}
    /> 
  </>  
}
AscensorSwitch.propTypes = {
  controlId: PropTypes.string.isRequired,
}

