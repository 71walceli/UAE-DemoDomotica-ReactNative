import { Image, StyleSheet, Text, View } from "react-native";
import { absolutePositionFactory, styles } from "./styles";
import { AscensorSwitch, LightbulbSwitch } from "./Switch";
import React from "react";
import { Cama, Closet, ServicioHigiénico } from "./Assets";

export const Piso1 = () => (
  <>
    <View style={styles.Map.container}>
      <View style={styles.Table}>
        <View style={styles.overlayStyle}>
          <Image
            source={Cama}
            style={absolutePositionFactory({
              top: "60%",
              right: "10%",
              width: "20%",
              height: "20%",
            })}
          />
          <Image
            source={Cama}
            style={absolutePositionFactory({
              top: "60%",
              left: "10%",
              width: "20%",
              height: "20%",
            })}
          />
          <Image
            source={ServicioHigiénico}
            style={absolutePositionFactory({
              top: "1%",
              left: "5%",
              height: "5%",
            })}
          />
          <Image
            source={ServicioHigiénico}
            style={absolutePositionFactory({
              top: "1%",
              right: "10%",
              height: "5%",
            })}
          />
          <Image
            source={Closet}
            style={absolutePositionFactory({
              top: "21%",
              right: "1%",
              width: "15%",
            })}
          />
          <Image
            source={Closet}
            style={absolutePositionFactory({
              top: "21%",
              right: "16%",
              width: "15%",
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
                  flexBasis: "80%",
                })}
              >
                <View style={styles.Table.cell}>
                  <View style={styles.Table}>
                    <View
                      style={StyleSheet.compose(styles.Table.row, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexBasis: "25%",
                      })}
                    >
                      <View
                        style={StyleSheet.compose(styles.Table.cell, {
                          borderWidth: 0,
                        })}
                      >
                        <View style={styles.Table}>
                          <View style={styles.Table.row}>
                            <View style={styles.Table.cell}>
                              <Text>Baño</Text>
                            </View>
                            <View
                              style={StyleSheet.compose(styles.Table.cell, {
                                borderWidth: 0,
                                width: "50%",
                              })}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View
                      style={StyleSheet.compose(styles.Table.row, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexBasis: "75%",
                      })}
                    >
                      <View
                        style={StyleSheet.compose(styles.Table.cell, {
                          borderWidth: 0,
                        })}
                      >
                        <Text>Habitación Invitados</Text>
                        <LightbulbSwitch controlId="habInvitado" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{ ...styles.Table.row, ...styles.Map.alleyHorizontal }}
              ></View>
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
              styles.Table.cell,
              styles.Map.alleyVertical
            )}
          ></View>
          <View
            style={StyleSheet.compose(styles.Table.cell, {
              borderLeftWidth: 0,
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: "40%",
            })}
          >
            <View style={styles.Table}>
              {/* TODO Simplificar código... */}
              <View
                style={StyleSheet.compose(styles.Table.row, {
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "80%",
                })}
              >
                <View style={styles.Table.cell}>
                  <View style={styles.Table}>
                    <View
                      style={StyleSheet.compose(styles.Table.row, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexBasis: "25%",
                      })}
                    >
                      <View
                        style={StyleSheet.compose(styles.Table.cell, {
                          borderWidth: 0,
                        })}
                      >
                        <View style={styles.Table}>
                          <View style={styles.Table.row}>
                            <View
                              style={StyleSheet.compose(styles.Table.cell, {
                                borderWidth: 0,
                                flexBasis: "25%",
                              })}
                            />
                            <View
                              style={StyleSheet.compose(styles.Table.cell, {
                                flexBasis: "75%",
                              })}
                            >
                              <Text>Baño</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View
                      style={StyleSheet.compose(styles.Table.row, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexBasis: "75%",
                      })}
                    >
                      <View
                        style={StyleSheet.compose(styles.Table.cell, {
                          borderWidth: 0,
                        })}
                      >
                        <Text>Habitación Principal</Text>
                        <LightbulbSwitch controlId="habPrincipal" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={StyleSheet.compose(styles.Table.row, {
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "20%",
                })}
              >
                <View style={styles.Table.cell}>
                  <Text>Balcón</Text>
                  <LightbulbSwitch controlId="balcon" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </>
);
