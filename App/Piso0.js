import { Image, StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import React from 'react';
import { AscensorSwitch, LightbulbSwitch, PuertaSwitch } from './Switch';
import { Comedor, Muebles } from './Assets';


export const Piso0 = () => {
  const overlayStyle = StyleSheet.compose({ position: "absolute", zIndex: -1000, top: 0, left: 0, width: "100%", height: "100%", })
  const absolutePositionFactory = ({width, height, top, bottom, left, right}) => {
    width = width === 0 && "0%" || width 
    height = height === 0 && "0%" || height 
    top = top === 0 && "0%" || top 
    bottom = bottom === 0 && "0%" || bottom 
    left = left === 0 && "0%" || left 
    right = right === 0 && "0%" || right
    if ((left && right) || (top && bottom)) {
      throw new TypeError("Opposite offsets can't be set at the same time.")
    }
    if ( !((top && left) || (top && right) || (bottom && left) || (bottom && right) )) {
      throw new TypeError("Must specify two non-opposite directions.")
    }
    return StyleSheet.compose({ 
      position: "absolute",
      width: width || "10%",
      height: height || "10%",
      top,
      bottom,
      left,
      right,
     })
  }

  return <>
    <View style={styles.Map.container}>
      <View style={styles.Table}>
        <View style={overlayStyle}>
          <Image source={Muebles} style={absolutePositionFactory({ top: "73%", right: "1%" })} />
          <Image source={Comedor} style={absolutePositionFactory({ top: "50%", left: "20%" })} />
        </View>
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
