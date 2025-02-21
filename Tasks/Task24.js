import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText: (newText) => setText(newText),
  }));

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.text}>Text from Parent:</Text>
      <Text style={styles.displayText}>{text}</Text>
    </View>
  );
});

function Task24() {
  const [inputText, setInputText] = useState('');
  const childRef = useRef(null);

  const handleTextChange = (newText) => {
    setInputText(newText); 
    if (childRef.current) {
      childRef.current.updateText(newText); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={inputText}
        onChangeText={handleTextChange} 
      />
      <MyFunctionPage ref={childRef} />
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
  displayText: {
    fontSize: 20,
    color: 'blue',
    marginTop: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Task24;
