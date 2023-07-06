import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const About = () => (
  <>
    <View style={style}>
      <Text>Universidad Agraria del Ecuador</Text>
      <Text>Facultad de Ciencias Agrarias</Text>
      <Text>...</Text>
      <Text>Estudiantes encargados</Text>
      <Text>Walter Celi</Text>
      <Text>Desarrollador</Text>
      <Text></Text>
      <Text>Ariel Aguayo</Text>
      <Text>Desarrollador</Text>
      <Text></Text>
      <Text>...</Text>
      <Text>...</Text>
      <Text></Text>
    </View>
  </>
);

const style = StyleSheet.compose({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.1)",
});
