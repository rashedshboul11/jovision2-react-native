import { Component, useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

class MyClassPage extends Component {
    render() {
        return (
            <View style={styles.pageContainer}>
                <Text style={styles.text}>Hello World</Text>
            </View>
        ); 
    }
}

function Task19() {
    const [showComponent, setShowComponent] = useState(false);
    return (
        <View style={styles.container}>
            <Button title="Show" onPress={() => setShowComponent(!showComponent)} />
                {showComponent && <MyClassPage/>}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
  });
  
export default Task19;