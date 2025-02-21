import { FlatList, View, Image, StyleSheet, Pressable, Alert, TextInput, Button, Modal } from "react-native";
import React, { useState } from "react";

function Task30() {
  const [images, setImages] = useState([
    require("../assets/image1.jpg"),
    require("../assets/image2.jpg"),
    require("../assets/image3.jpg"),
    require("../assets/image4.jpg"),
    require("../assets/image5.jpg"),
    require("../assets/image6.jpg"),
    require("../assets/image7.jpg"),
    require("../assets/image8.jpg"),
    require("../assets/image9.jpg"),
    require("../assets/image10.jpg")
  ]); 

  function deleteImage(index) {
    const newImages = images.filter((item, idx) => idx !== index); 
    setImages(newImages); 
  }

  const [showImg, setShowImg] = useState(false); 
  const [imgIndex, setImgIndex] = useState("");

  function handleImageRender({ item, index }) {
    return (
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <Pressable onPress={() => Alert.alert(`Image ${index + 1} Pressed`, `This is image at index ${index + 1}`)}>
            <Image source={item} style={styles.image} />
          </Pressable>
          <View style={styles.deleteButtonContainer}>
            <Button title="Delete" onPress={() => deleteImage(index)}/>
          </View>
        </View>
      </View>
    );
  }

  function handleSubmit() {
    const index = parseInt(imgIndex, 10);
    if (images.length === 0) {
        Alert.alert(`you deleted all the images.`);
      return; 
    }
    if (isNaN(index) || index < 1 || index > images.length) {
      Alert.alert(`Invalid Input", "Please enter a valid image number (1-${images.length}).`);
      return; 
    } 
    setShowImg(true); 
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={handleImageRender}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type image number..."
          value={imgIndex}
          onChangeText={(text) => setImgIndex(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <Modal 
      visible={showImg}
      animationType="slide"
      presentationStyle="pageSheet"
      >
        <Button title="Close" onPress={() => setShowImg(false)}/>
          <Image source={images[imgIndex - 1]} style={styles.modalImage}/>
      </Modal>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f8f8f8",
    },
    list: {
      alignItems: "center",
      paddingBottom: 100,
    },
    imageContainer: {
      marginVertical: 10,
      margin: 10,
    },
    imageWrapper: {
      position: 'relative',
      width: 200,
      height: 200,

    },
    image: {
      width: 200,
      height: 200,
      resizeMode: "contain",
    },
    deleteButtonContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1,
    },
    inputContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#fff",
      padding: 10,
      borderTopWidth: 1,
      borderColor: "#ddd",
      zIndex: 1,
    },
    input: {
      width: "80%",
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
      textAlign: "center",
      alignSelf: "center",
    },
    modalImage: {
      width: "100%",
      height: "80%",
      resizeMode: "contain",
    }
  });

export default Task30;