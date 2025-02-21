import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function MyFunctionPage() {
    const onRender = ()=> {
        console.log("Component is loaded"); 
        
        return () => {console.log("Component is unloaded"); } // only executed when the the component unmounts. 

    }
    useEffect(onRender, []); 
    return (
                <View style={styles.pageContainer}>
                    <Text style={styles.text}>Hello World</Text>
                </View>
            );
}

function Task21() {
    const [showComponent, setShowComponent] = useState(false);
        return (
            <View style={styles.container}>
                <Button title="Show" onPress={() => setShowComponent(!showComponent)} />
                {showComponent && <MyFunctionPage/>}
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

  export default Task21; 