import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Task16 = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View style={styles.container}>
            <Button title="Show" onPress={toggleVisibility} />
            {isVisible && <Text style={styles.text}>Rashed Shboul</Text>}
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
    },
});

export default Task16;
