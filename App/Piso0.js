import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import React from 'react';
import { AscensorSwitch, LightbulbSwitch, PuertaSwitch } from './Switch';


export const Piso0 = () => {
  return <>
    <View style={styles.Map.container}>
      <View style={styles.Table}>
        <View style={styles.Table.row}>
          <View style={StyleSheet.compose( styles.Table.cell, 
            { borderRightWidth: 0, flexGrow: 1, flexShrink: 1, flexBasis: "40%" }
          )}>
            <View style={styles.Table}>
              <View style={StyleSheet.compose(styles.Table.row, 
                  { flexGrow: 1, flexShrink: 1, flexBasis: "30%" })
                }>
                <View style={styles.Table.cell}>
                  <Text>Baño</Text>
                </View>
              </View>
              <View style={StyleSheet.compose(styles.Table.row, 
                  { flexGrow: 1, flexShrink: 1, flexBasis: "50%" })
                }>
                <View style={styles.Table.cell}>
                  <Text>Comedor</Text>
                  <LightbulbSwitch controlId="comedor" />
                </View>
              </View>
              <View style={StyleSheet.compose( styles.Table.row, styles.Map.alleyHorizontal )} />
              <View style={StyleSheet.compose(styles.Table.row, 
                  { flexGrow: 1, flexShrink: 1, flexBasis: "10%" })
                }>
                <View style={styles.Table.cell}>
                  <Text>Ascensor</Text>
                  <AscensorSwitch controlId="ascensor" />
                </View>
              </View>
            </View>
          </View>
          <View style={
            StyleSheet.compose( 
              StyleSheet.compose(styles.Table.cell, { justifyContent: "flex-end" }), 
              styles.Map.alleyVertical 
            )
          }>
            <Text>Puerta</Text>
            <PuertaSwitch controlId="puerta" />
          </View>
          <View style={StyleSheet.compose( styles.Table.cell, 
            { borderLeftWidth: 0, flexGrow: 1, flexShrink: 1, flexBasis: "40%" }
          )}>
            <View style={styles.Table}>
              <View style={StyleSheet.compose(styles.Table.row, 
                  { flexGrow: 1, flexShrink: 1, flexBasis: "45%" }
              )}>
                <View style={styles.Table.cell}>
                  <Text>Cocina</Text>
                  <LightbulbSwitch controlId="cocina" />
                </View>
              </View>
              <View style={StyleSheet.compose( styles.Table.row, styles.Map.alleyHorizontal )}>
              </View>
              <View style={StyleSheet.compose(styles.Table.row, 
                { flexGrow: 1, flexShrink: 1, flexBasis: "45%" }
              )}>
                <View style={styles.Table.cell}>
                  <Text>Sala</Text>
                  <LightbulbSwitch controlId="sala" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </>;
};
