import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Piso0 } from "./Piso0";
import { Piso1 } from "./Piso1";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Config, AppContext } from "./Config";
import { Modal } from "./Modal";

export default function App() {
  const Tabs = createBottomTabNavigator();
  const [controls, setControls] = React.useState({
    ascensor: 0,
    balcon: 1,
    cocina: 1,
    comedor: 1,
    habInvitado: 1,
    habPrincipal: 1,
    sala: 1,
    puerta: 0,
  });
  const cooldownTimeouts = {
    puerta: 5000,
    ascensor: 2000,
  }
  const [config, setConfig] = React.useState({
    apiAddress: "192.168.0.100",
  });
  const [busy, setBusy] = React.useState(false)

  const [ready, setReady] = React.useState(false);
  React.useState(() => {
    if (ready) return;
    setReady(true);
    loadState();
    const timeout = setInterval(() => {
      loadState();
    }, 5000);
    return () => clearInterval(timeout);
  }, [ready]);

  const handleControlChange = (control, value) => {
    const numberValue = Number(value);
    const fetchUrl =
      ([
        "balcon",
        "cocina",
        "comedor",
        "habInvitado",
        "habPrincipal",
        "sala",
      ].includes(control) &&
        `http://${config.apiAddress}/luz?nombre=${control}&estado=${numberValue}`) ||
      (["ascensor"].includes(control) &&
        `http://${config.apiAddress}/ascensor?piso=${1 + numberValue}`) ||
      ((["puerta"].includes(control) && !controls.puerta) &&
        `http://${config.apiAddress}/${controls.puerta ? "cerrar" : "abrir"}Puerta`);
    if (!fetchUrl) return
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.message);
        } else {
          setControls((actualValues) => {
            console.log({ [control]: value });
            return {
              ...actualValues,
              [control]: value,
            };
          })
        }
        if (cooldownTimeouts[control]) {
          setBusy(true)
          setTimeout(() => {
            if (control === "puerta") setControls(previous => ({...previous, puerta: 0}))
            setBusy(false);
          }, cooldownTimeouts[control])
        }
      });
  };

  const styles = StyleSheet.create({
    centerElements: {
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
    },
    fullSize: { height: "100%", width: "100%" },
  });
  return (
    <>
      <AppContext.Provider
        value={{ controls, handleControlChange, config, setConfig, cooldownTimeouts }}
      >
        <View style={styles.centerElements}>
          <View style={styles.fullSize}>
            <NavigationContainer>
              <Tabs.Navigator
                initialRouteName="Planta Baja"
                screenOptions={{
                  tabBarActiveTintColor: "#e91e63",
                }}
              >
                <Tabs.Screen
                  name="Planta Baja"
                  component={Piso0}
                  options={{
                    tabBarLabel: "Planta Baja",
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="numeric-0-box"
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
                <Tabs.Screen
                  name="Piso true"
                  component={Piso1}
                  options={{
                    tabBarLabel: "Piso true",
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="numeric-1-box"
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
                <Tabs.Screen
                  name="Configuración"
                  component={Config}
                  options={{
                    tabBarLabel: "Configuración",
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="cog-outline"
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
              </Tabs.Navigator>
            </NavigationContainer>
          </View>
        </View>
        <Modal visible={busy} onRequestClose={() => setBusy(false)} style={styles.centerElements}>
          <ActivityIndicator animating={busy} size="large" style={styles.centerElements} />
        </Modal>
      </AppContext.Provider>
    </>
  );

  function loadState() {
    fetch(`http://${config.apiAddress}`)
      .then((response) => response.json())
      .then((response) =>
        setControls((previous) => {
          const _state = { ...previous, ...response.state };
          _state.ascensor -= 1;
          _state.puerta = previous.puerta
          console.log(_state.puerta)
          return _state;
        })
      )
      .catch(console.error);
  }
}
