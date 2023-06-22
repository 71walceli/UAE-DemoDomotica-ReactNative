import { View, Text, StyleSheet } from "react-native"
import React from "react"

export const About = () => <>
  <View style={style}>
    <Text>Acerca de...</Text>
  </View>
</>

const style = StyleSheet.compose({ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" })
