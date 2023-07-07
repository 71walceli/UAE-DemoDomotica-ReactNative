import { Button, Pressable, Switch as RNSwitch, Text, View } from "react-native";
import { lightBulbOff, lightBulbOn } from "./Assets";
import { Image, StyleSheet } from "react-native";
import React from "react";
import { AppContext } from "./Config";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Switch = ({ controlId, ...props }) => {
  const { controls, handleControlChange, cooldownTimeouts } = React.useContext(AppContext);

  return (
    <>
      <RNSwitch
        value={Boolean(controls?.[controlId])}
        onValueChange={(v) => {
          handleControlChange(controlId, Number(v));
        }}
        {...props}
      />
    </>
  );
};
Switch.propTypes = {
  controlId: PropTypes.string.isRequired,
  innerCircleContent: PropTypes.element,
};

export const LightbulbSwitch = ({ controlId, ...props }) => {
  const { controls } = React.useContext(AppContext);
  const style = StyleSheet.create({
    lightbulbSwitch: { height: 16, width: 16 },
  });

  const iconOn = (
    <Image
      style={StyleSheet.compose(style.lightbulbSwitch)}
      source={lightBulbOn}
    />
  );
  const iconOff = (
    <Image
      style={StyleSheet.compose(style.lightbulbSwitch)}
      source={lightBulbOff}
    />
  );
  return (
    <View
      style={StyleSheet.compose({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <Switch controlId={controlId} {...props} />
      {(controls[controlId] && iconOn) || iconOff}
    </View>
  );
};
LightbulbSwitch.propTypes = {
  controlId: PropTypes.string.isRequired,
};

export const AscensorBoton = ({ controlId, ...props }) => {
  const { controls, handleControlChange, cooldownTimeouts } = React.useContext(AppContext);
  
  return (
    <View
      style={StyleSheet.compose({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <Pressable
        style={StyleSheet.compose({
          borderRadius: 7,
          padding: 10,
          elevation: 2,
          backgroundColor: "#01b7a6",
        })}
        onPress={() => {
          const value = Boolean(controls[controlId])
          handleControlChange(controlId, Number(!value))
        }}
      >
        <Text size={24}>{controls[controlId] ? "P1" : "PB"}</Text>
      </Pressable>
    </View>
  );
};
AscensorBoton.propTypes = {
  controlId: PropTypes.string.isRequired,
};

export const PuertaBotón = ({ controlId, ...props }) => {
  const { controls, handleControlChange, cooldownTimeouts } = React.useContext(AppContext);
  
  return (
    <View
      style={StyleSheet.compose({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <Pressable
        style={StyleSheet.compose({
          borderRadius: 7,
          padding: 10,
          elevation: 2,
          backgroundColor: "#01b7a6",
        })}
        onPress={() => {
          const value = Boolean(controls[controlId])
          handleControlChange(controlId, Number(!value))
        }}
      >
        <MaterialCommunityIcons 
          name={`door-${controls[controlId] ? "open" : "closed"}`} size={24} />
      </Pressable>
    </View>
  );
};
PuertaBotón.propTypes = {
  controlId: PropTypes.string.isRequired,
};
