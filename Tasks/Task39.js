import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibility } from "../redux/textSlice";
import ComponentOne from "./ComponentOne";

export default function Task39() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.text.isVisible);

  return (
    <View style={styles.mainContainer}>
      {isVisible && <ComponentOne />}
      <Button title={isVisible ? "Hide" : "Show"} onPress={() => dispatch(toggleVisibility())} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
});
