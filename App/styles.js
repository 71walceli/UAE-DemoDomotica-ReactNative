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
      borderLeftWidth: 0,
      borderRightWidth: 0,
      flexGrow: 1, 
      flexShrink: 1, 
      flexBasis: "10%",
    },
    alleyVertical: {
      display: "flex",
      borderLeftWidth: 0,
      borderRightWidth: 0,
      flexGrow: 1, 
      flexShrink: 1, 
      flexBasis: "20%",
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
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "gray",
      verticalAlign: "middle",
      textAlign: "center",
      textAlignVertical: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});
