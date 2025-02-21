import React, { useState } from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native"; 

const Task18 = () => {
    const [loading, setLoading] = useState(true); 
    setTimeout(() => { setLoading(false) }, 5000); 

    return (
        <View style={styles.container}>
            {loading ? 
                <>
                    <ActivityIndicator size="large" color="#3498db" />
                    <Text style={styles.text}>Loading...</Text>
                </>
             : 
                <Text style={styles.name}>Rashed Shboul</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default Task18;
