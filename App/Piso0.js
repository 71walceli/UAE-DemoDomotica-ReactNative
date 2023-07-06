import { Image, StyleSheet, Text, View } from "react-native";
import { absolutePositionFactory, styles } from "./styles";
import React from "react";
import { AscensorSwitch, LightbulbSwitch, PuertaBotón } from "./Switch";
import { Cocina, Comedor, Muebles, ServicioHigiénico } from "./Assets";

export const Piso0 = () => (
  <>
    <View style={styles.Map.container}>
      <View style={styles.Table}>
        <View style={styles.overlayStyle}>
          <Image
            source={Muebles}
            style={absolutePositionFactory({
              bottom: "1%",
              right: "1%",
              height: "20%",
              width: "20%",
            })}
          />
          <Image
            source={Comedor}
            style={absolutePositionFactory({
              top: "55%",
              left: "2.5%",
              width: "35%",
              height: "20%",
            })}
          />
          <Image
            source={ServicioHigiénico}
            style={absolutePositionFactory({
              top: "1%",
              left: "15%",
              height: "5%",
            })}
          />
          <Image
            source={Cocina}
            style={absolutePositionFactory({
              top: "0%",
              right: "7.5%",
              height: "15%",
              width: "25%",
            })}
          />
        </View>
        <View style={styles.Table.row}>
          <View
            style={StyleSheet.compose(styles.Table.cell, {
              borderRightWidth: 0,
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: "40%",
            })}
          >
            <View style={styles.Table}>
              <View
                style={StyleSheet.compose(styles.Table.row, {
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "30%",
                })}
              >
                <View style={styles.Table.cell}>
                  <Text>Baño</Text>
                </View>
              </View>
              <View
                style={StyleSheet.compose(styles.Table.row, {
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "50%",
                })}
              >
                <View style={styles.Table.cell}>
                  <Text>Comedor</Text>
                  <LightbulbSwitch controlId="comedor" />
                </View>
              </View>
              <View
                style={StyleSheet.compose(
                  styles.Table.row,
                  styles.Map.alleyHorizontal
                )}
              />
              <View
                style={StyleSheet.compose(styles.Table.row, {
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "10%",
                })}
              >
                <View style={styles.Table.cell}>
                  <Text>Ascensor</Text>
                  <AscensorSwitch controlId="ascensor" />
                </View>
              </View>
            </View>
          </View>
          <View
            style={StyleSheet.compose(
              StyleSheet.compose(styles.Table.cell, {
                justifyContent: "flex-end",
              }),
              styles.Map.alleyVertical
            )}
          >
            <Text>Puerta</Text>
            <PuertaBotón controlId="puerta" />
          </View>
          <View
            style={StyleSheet.compose(styles.Table.cell, {
              borderLeftWidth: 0,
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: "40%",
            })}
          >
            <View style={styles.Table}>
              <View
                style={StyleSheet.compose(styles.Table.row, {
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "45%",
                })}
              >
                <View style={styles.Table.cell}>
                  <Text>Cocina</Text>
                  <LightbulbSwitch controlId="cocina" />
                </View>
              </View>
              <View
                style={StyleSheet.compose(
                  styles.Table.row,
                  styles.Map.alleyHorizontal
                )}
              ></View>
              <View
                style={StyleSheet.compose(styles.Table.row, {
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "45%",
                })}
              >
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
  </>
);
