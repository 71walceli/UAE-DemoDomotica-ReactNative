import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  Map: {
    container: {
      width: "100%",
      height: "100%",
      padding: 32,
    },
    alleyHorizontal: {
      borderLeft: 0,
      borderRight: 0,
      height: "10%",
    },
    alleyVertical: {
      borderLeft: 0,
      borderRight: 0,
      width: "20%",
    },
  },
  Table: {
    borderCollapse: "collapse",
    display: "table",
    width: "100%",
    height: "100%",
    row: {
      display: "table-row",
    },
    cell: {
      display: "table-cell",
      border: "1px solid gray",
      verticalAlign: "middle",
      textAlign: "center",
      textAlignVertical: "center",
    },
  },
});
