import { Button, Switch as RNSwitch, Text, View } from "react-native";
import { lightBulbOff, lightBulbOn } from "./Assets";
import { Image, StyleSheet } from "react-native";
import React from "react";
import { AppContext } from "./Config";
import PropTypes from "prop-types";

export const Switch = ({ controlId, ...props }) => {
  const { controls, handleControlChange, cooldownTimeouts } = React.useContext(AppContext);
  const [disabled, setDisabled] = React.useState(false)

  return (
    <>
      <RNSwitch
        disabled={disabled}
        value={Boolean(controls?.[controlId])}
        onValueChange={(v) => {
          handleControlChange(controlId, Number(v));
          if (cooldownTimeouts[controlId]) {
            setDisabled(true)
            setTimeout(() => setDisabled(false), cooldownTimeouts[controlId])
          }
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

export const AscensorSwitch = ({ controlId, ...props }) => {
  const { controls } = React.useContext(AppContext);

  return (
    <View
      style={StyleSheet.compose({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <Switch controlId={controlId} {...props} />
      <Text>{(controls[controlId] && "Piso 1") || "Planta Baja"}</Text>
    </View>
  );
};

export const PuertaBotón = ({ controlId, ...props }) => {
  const { controls, handleControlChange, cooldownTimeouts } = React.useContext(AppContext);
  const [disabled, setDisabled] = React.useState(false)
  
  return (
    <View
      style={StyleSheet.compose({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <Button title={(!controls[controlId] && "Cerrar") || "Abrir"} disabled={disabled}
        onPress={() => {
          const value = Boolean(controls[controlId])
          handleControlChange(controlId, Number(!value))
          if (cooldownTimeouts[controlId]) {
            setDisabled(true)
            setTimeout(() => setDisabled(false), cooldownTimeouts[controlId])
          }
        }}
      />
    </View>
  );
};
AscensorSwitch.propTypes = {
  controlId: PropTypes.string.isRequired,
};

PuertaBotón.propTypes = {
  controlId: PropTypes.string.isRequired,
};
