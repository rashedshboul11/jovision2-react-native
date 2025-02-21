import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


class MyClassPage extends Component {
    render() {
        return (
            <View style={styles.pageContainer}>
              <Text style={styles.text}>Enter Text Below:</Text>
              <TextInput
                style={styles.input}
                placeholder="Type something..."
                onChangeText={this.props.onTextChange} // Pass the text to the parent
        
              />
            </View>
          );
    }
}


function Task23() {
    const [text, setText] = useState('');
      
      return (
        <View style={styles.container}>
          <Text style={styles.displayText}>Parent Text: {text}</Text>
          <MyClassPage onTextChange={setText}></MyClassPage>
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    pageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    displayText: {
      fontSize: 20,
      marginBottom: 20,
    },
  });
export default Task23; 
