import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Screen1() {
    const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <Button 
      title="go to screen 2" 
      onPress={() => navigation.navigate("screen2")}
      />
      <Button 
      title="go to screen 3" 
      onPress={() => navigation.navigate("screen3")}
      />
      <Button 
      title="go to screen 4" 
      onPress={() => navigation.navigate("screen4")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
