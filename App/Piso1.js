import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import { AscensorSwitch, LightbulbSwitch } from './Switch';
import React from 'react';


export const Piso1 = () => <>
  <View style={styles.Map.container}>
    <View style={styles.Table}>
      <View style={styles.Table.row}>
        <View style={StyleSheet.compose( 
          styles.Table.cell, { borderRight: 0, flexGrow: 1, flexShrink: 1, flexBasis: "40%", }
        )}>
          <View style={styles.Table}>
            <View style={StyleSheet.compose(
                styles.Table.row, { flexGrow: 1, flexShrink: 1, flexBasis: "80%" }
              )}>
              <View style={styles.Table.cell}>
                <Text>Balcón</Text>
                <LightbulbSwitch controlId="balcon" />
              </View>
            </View>
            <View style={{...styles.Table.row, ...styles.Map.alleyHorizontal}}>
            </View>
            <View style={StyleSheet.compose(styles.Table.row, { flexGrow: 1, flexShrink: 1, flexBasis: "10%" })}>
              <View style={styles.Table.cell}>
                <Text>Ascensor</Text>
                <AscensorSwitch controlId="ascensor" />
              </View>
            </View>
          </View>
        </View>
        <View style={StyleSheet.compose( styles.Table.cell, styles.Map.alleyVertical )}></View>
        <View style={StyleSheet.compose( 
          styles.Table.cell, { borderLeft: 0, flexGrow: 1, flexShrink: 1, flexBasis: "40%", }
        )}>
          <View style={styles.Table}>
            {/* TODO Simplificar código... */}
            <View style={StyleSheet.compose(
                styles.Table.row, { flexGrow: 1, flexShrink: 1, flexBasis: "40%" }
              )}>
              <View style={styles.Table.cell}>
                <View style={styles.Table}>
                  <View style={StyleSheet.compose(
                      styles.Table.row, { flexGrow: 1, flexShrink: 1, flexBasis: "25%" }
                    )}>
                    <View style={StyleSheet.compose(styles.Table.cell, { border: 0 })}>
                      <View style={styles.Table}>
                        <View style={styles.Table.row}>
                          <View style={StyleSheet.compose(styles.Table.cell, { border: 0, width: "50%" })} />
                          <View style={styles.Table.cell}>
                            <Text>Baño</Text>
                            <LightbulbSwitch controlId="banio_p1_2" />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={StyleSheet.compose(
                    styles.Table.row, { flexGrow: 1, flexShrink: 1, flexBasis: "75%" })}
                  >
                    <View style={StyleSheet.compose(styles.Table.cell, { border: 0 })}>
                      <Text>Habitación Invitados</Text>
                      <LightbulbSwitch controlId="habitacion_invitados" />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={StyleSheet.compose(
              styles.Table.row, { flexGrow: 1, flexShrink: 1, flexBasis: "10%" })}
            >
              <View style={styles.Table.cell}>
                <Text>Baño</Text>
                <LightbulbSwitch controlId="banio_p1" />
              </View>
            </View>
            <View style={StyleSheet.compose(
              styles.Table.row, { flexGrow: 1, flexShrink: 1, flexBasis: "5%" })}
            >
              <View style={styles.Table.cell}>
                <Text>Closet</Text>
                <LightbulbSwitch controlId="closet" />
              </View>
            </View>
            <View style={StyleSheet.compose(
              styles.Table.row, { flexGrow: 1, flexShrink: 1, flexBasis: "35%" })}
            >
              <View style={styles.Table.cell}>
                <Text>Habitación Principal</Text>
                <LightbulbSwitch controlId="habitacion_principal" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
</>;
