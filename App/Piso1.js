import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import { AscensorSwitch, LightbulbSwitch } from './Switch';

export const Piso1 = _ => <>
  <View style={styles.Map.container}>
    <View style={styles.Table}>
      <View style={styles.Table.row}>
        <View style={{ ...styles.Table.cell, borderRight: 0, flex: "40%" }}>
          <View style={styles.Table}>
            <View style={StyleSheet.compose(styles.Table.row, { flex: "80%" })}>
              <View style={styles.Table.cell}>
                <Text>Balcón</Text>
                <LightbulbSwitch controlId="balcon" />
              </View>
            </View>
            <View style={{...styles.Table.row, ...styles.Map.alleyHorizontal}}>
            </View>
            <View style={StyleSheet.compose(styles.Table.row, { flex: "10%" })}>
              <View style={styles.Table.cell}>
                <Text>Ascensor</Text>
                <AscensorSwitch controlId="ascensor" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ ...styles.Table.cell, ...styles.Map.alleyVertical }}></View>
        <View style={{ ...styles.Table.cell, borderLeft: 0, flex: "40%", }}>
          <View style={styles.Table}>
            {/* TODO Simplificar código... */}
            <View style={StyleSheet.compose(styles.Table.row, { flex: "40%" })}>
              <View style={styles.Table.cell}>
                <View style={styles.Table}>
                  <View style={{...styles.Table.row, flex: "25%"}}>
                    <View style={{...styles.Table.cell, border: 0}}>
                      <View style={styles.Table}>
                        <View style={styles.Table.row}>
                          <View style={{...styles.Table.cell, border: 0, width: "50%"}} />
                          <View style={styles.Table.cell}>
                            <Text>Baño</Text>
                            <LightbulbSwitch controlId="banio_p1_2" />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{...styles.Table.row, flex: "75%"}}>
                    <View style={{...styles.Table.cell, border: 0}}>
                      <Text>Habitación Invitados</Text>
                      <LightbulbSwitch controlId="habitacion_invitados" />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={StyleSheet.compose(styles.Table.row, { flex: "10%" })}>
              <View style={styles.Table.cell}>
                <Text>Baño</Text>
                <LightbulbSwitch controlId="banio_p1" />
              </View>
            </View>
            <View style={StyleSheet.compose(styles.Table.row, { flex: "5%" })}>
              <View style={styles.Table.cell}>
                <Text>Closet</Text>
                <LightbulbSwitch controlId="closet" />
              </View>
            </View>
            <View style={StyleSheet.compose(styles.Table.row, { flex: "35%" })}>
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
