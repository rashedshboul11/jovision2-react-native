import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Screen4() {
    const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Text>Screen 4</Text>
      <Button 
            title="go to screen 1" 
            onPress={() => navigation.navigate("screen1")}
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
