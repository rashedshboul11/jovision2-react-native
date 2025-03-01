import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setText } from "../redux/textSlice";

function ComponentOne() {
  const dispatch = useDispatch();
  const textValue = useSelector((state) => state.text.textValue);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={textValue}
        onChangeText={(newText) => dispatch(setText(newText))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

export default ComponentOne;
