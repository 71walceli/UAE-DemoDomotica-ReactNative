import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  Map: {
    container: {
      width: "100%",
      height: "100%",
      padding: 32,
    },
    alleyHorizontal: {
      display: "flex",
      borderLeft: 0,
      borderRight: 0,
      //flex: 1,
      flex: "10%",
      //minHeight: "10vh",
      //height: "10%",
      //maxHeight: "10%",
    },
    alleyVertical: {
      display: "flex",
      borderLeft: 0,
      borderRight: 0,
      //flex: 1,
      flex: "20%",
    },
  },
  Table: {
    borderCollapse: "collapse",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    row: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
    },
    cell: {
      flex: 1,
      flexDirection: "column",
      display: "flex",
      border: "1px solid gray",
      verticalAlign: "middle",
      textAlign: "center",
      textAlignVertical: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});
