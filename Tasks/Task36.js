import { ScrollView, Text, View, StyleSheet } from "react-native";

function generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
function Task36 () {
    
    const words = Array.from({length: 100}, () => generateRandomWord(10)); 
    
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
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
  
export default Task36;