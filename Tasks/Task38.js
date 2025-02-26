import React, {createContext, useState, useContext} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextContext = createContext();

class ComponentOne extends React.Component {
  render() {
    return (
      <TextContext.Consumer>
        {({sharedText}) => (
          <View style={styles.box}>
            <Text style={styles.text}>Shared Text: {sharedText}</Text>
          </View>
        )}
      </TextContext.Consumer>
    );
  }
}

function ComponentTwo() {
  const {sharedText, setSharedText} = useContext(TextContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={sharedText}
        onChangeText={setSharedText}
      />
      <ComponentOne />
    </View>
  );
}

function Task38() {
  const [sharedText, setSharedText] = useState('');

  return (
    <TextContext.Provider value={{sharedText, setSharedText}}>
      <View style={styles.mainContainer}>
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
      </View>
    </TextContext.Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  box: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Task38;
