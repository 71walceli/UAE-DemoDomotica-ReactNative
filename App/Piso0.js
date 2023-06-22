import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import React from 'react';
import { AscensorSwitch, LightbulbSwitch } from './Switch';


export const Piso0 = () => {
  return <>
    <View style={styles.Map.container}>
      <View style={styles.Table}>
        <View style={styles.Table.row}>
          <View style={StyleSheet.compose( styles.Table.cell, 
              { borderRight: 0, flexGrow: 1, flexShrink: 1, flexBasis: "40%" }
            )}>
            <View style={styles.Table}>
              <View style={StyleSheet.compose(styles.Table.row, 
                  { flexGrow: 1, flexShrink: 1, flexBasis: "30%" })
                }>
                <View style={styles.Table.cell}>
                  <Text>Baño</Text>
                  <LightbulbSwitch controlId="banio_p0" />
                </View>
              </View>
              <View style={StyleSheet.compose(styles.Table.row, 
                  { flexGrow: 1, flexShrink: 1, flexBasis: "50%" })
                }>
                <View style={styles.Table.cell}>
                  <Text>Comedor</Text>
                  <LightbulbSwitch controlId="comedor_p0" />
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
          <View style={StyleSheet.compose( styles.Table.cell, styles.Map.alleyVertical )} />
          <View style={StyleSheet.compose( styles.Table.cell, 
            { borderLeft: 0, flexGrow: 1, flexShrink: 1, flexBasis: "40%" }
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
