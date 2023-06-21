import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import React from 'react';
import { AscensorSwitch, LightbulbSwitch } from './Switch';
import { AppContext } from "./App.js"

export const Piso0 = _ => {
  const {controls, handleControlChange} = React.useContext(AppContext)
  
  return <>
    <View style={styles.Map.container}>
      <View style={styles.Table}>
        <View style={styles.Table.row}>
          <View style={{ ...styles.Table.cell, borderRight: 0, flex: "40%" }}>
            <View style={styles.Table}>
              <View style={StyleSheet.compose(styles.Table.row, { flex: "30%" })}>
                <View style={styles.Table.cell}>
                  <Text>Baño</Text>
                  <LightbulbSwitch controlId="banio_p0" />
                </View>
              </View>
              <View style={StyleSheet.compose(styles.Table.row, { flex: "50%" })}>
                <View style={styles.Table.cell}>
                  <Text>Comedor</Text>
                  <LightbulbSwitch controlId="comedor_p0" />
                </View>
              </View>
              <View style={{...styles.Table.row, ...styles.Map.alleyHorizontal}}>
                {/* <View style={StyleSheet.compose(styles.Table.cell, {border: 0})} /> */}
              </View>
              <View style={StyleSheet.compose(styles.Table.row, { flex: "10%" })}>
                <View style={{...styles.Table.cell}}>
                  <Text>Ascensor</Text>
                  <AscensorSwitch controlId="ascensor" />
                </View>
              </View>
            </View>
          </View>
          <View style={{ ...styles.Table.cell, ...styles.Map.alleyVertical }}></View>
          <View style={{ ...styles.Table.cell, borderLeft: 0, flex: "40%" }}>
            <View style={styles.Table}>
              <View style={StyleSheet.compose(styles.Table.row, { flex: "45%" })}>
                <View style={styles.Table.cell}>
                  <Text>Cocina</Text>
                  <LightbulbSwitch controlId="cocina" />
                </View>
              </View>
              <View style={{...styles.Table.row, ...styles.Map.alleyHorizontal}}>
              </View>
              <View style={StyleSheet.compose(styles.Table.row, { flex: "45%" })}>
                <View style={{...styles.Table.cell}}>
                  <Text>Sala</Text>
                  <LightbulbSwitch controlId="sala_p0" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </>;
};
