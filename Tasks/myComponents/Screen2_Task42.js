import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Screen2() {
    const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
      <Button 
            title="go to screen 3" 
            onPress={() => navigation.navigate("screen3")}
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
