import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Map: {
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
    container: {
      width: "100%",
      height: "100%",
      padding: 32,
    },
  },
  Table: {
    borderCollapse: "collapse",
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
    display: "flex",
    flexDirection: "column",
    height: "100%",
    row: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
    },
    width: "100%",
  },
  overlayStyle: {
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: -1000,
  },
});

export const absolutePositionFactory = ({
  width,
  height,
  top,
  bottom,
  left,
  right,
}) => {
  width = (width === 0 && "0%") || width;
  height = (height === 0 && "0%") || height;
  top = (top === 0 && "0%") || top;
  bottom = (bottom === 0 && "0%") || bottom;
  left = (left === 0 && "0%") || left;
  right = (right === 0 && "0%") || right;
  if ((left && right) || (top && bottom)) {
    throw new TypeError("Opposite offsets can't be set at the same time.");
  }
  if (
    !((top && left) || (top && right) || (bottom && left) || (bottom && right))
  ) {
    throw new TypeError("Must specify two non-opposite directions.");
  }
  return StyleSheet.compose({
    position: "absolute",
    width: width || "10%",
    height: height || "10%",
    top,
    bottom,
    left,
    right,
  });
};
