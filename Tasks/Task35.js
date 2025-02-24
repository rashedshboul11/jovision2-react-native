import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

function Task35() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => { loadData() }, []); 

    const loadData = async () => {
        try {
            const storedData = await AsyncStorage.getItem("formData");
            if (storedData) {
                const { name, age, country, timestamp } = JSON.parse(storedData);
                const savedTime = new Date(timestamp);
                const currentTime = new Date();

                if ((currentTime - savedTime) / 1000 < 60) {
                    setName(name);
                    setAge(age);
                    setCountry(country);
                } else {
                    console.log("Stored data is older than 1 minute, ignoring.");
                }
            }
        } catch (error) {
            Alert.alert("Error", "Failed to load saved data.");
            console.error(error);
        }
    };

    const saveData = async () => {
        try {
            const formData = {
                name,
                age,
                country,
                timestamp: new Date().toISOString() // Save current timestamp
            };
            await AsyncStorage.setItem("formData", JSON.stringify(formData));
            Alert.alert("Success", "Data saved successfully!");
        } catch (error) {
            Alert.alert("Error", "Failed to save data.");
            console.error(error);
        }
    };



    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Age:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your age"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
            />

            <Text style={styles.label}>Country:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your country"
                value={country}
                onChangeText={setCountry}
            />

            <Button title="Submit" onPress={saveData} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default Task35;
