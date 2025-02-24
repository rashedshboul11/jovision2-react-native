import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, RefreshControl } from "react-native";

function generateRandomWord(length) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function Task37() {
  const [words, setWords] = useState(Array.from({ length: 100 }, () => generateRandomWord(8)));

  const onRefresh = () => {
      setWords(Array.from({ length: 100 }, () => generateRandomWord(8))); 
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl  onRefresh={onRefresh} refreshing={false} />
        }
      >
        {words.map((word, index) => (
          <Text key={index} style={styles.text}>
            {index + 1}. {word}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#f0f0f0",
  },
  scrollContainer: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    padding: 10,
    backgroundColor: "#ffffff",
    marginBottom: 5,
    borderRadius: 5,
    textAlign: "center",
  },
});

export default Task37;
