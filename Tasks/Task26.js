import { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function Task26() {
    const [ip, setIp] = useState(""); 
    
    async function fetchIp() {
        try {
            let response = await fetch("https://api.ipify.org/");
            let data = await response.text();
            setIp(data);
        } catch (error) {
            console.log("Error", error);
        }
    }

    //Blocking requests are not supported in React Native this function will generate an error
    function fetchBlockingData() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.ipify.org/", false); // `false` makes it synchronous (blocking)
        xhr.send();

        if (xhr.status === 200) {
            setIp(xhr.responseText);
        } else { 
            console.error("Request failed");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.ipText}>IP: {ip}</Text>
            <Button onPress={fetchIp} title="Get your IP (Non-Blocking)" />
            <View style={styles.spacer} />
            <Button onPress={fetchBlockingData} title="Get your IP (Blocking)" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    ipText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    spacer: {
        height: 10, 
    },
});

export default Task26;
