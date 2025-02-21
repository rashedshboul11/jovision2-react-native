import { useState } from "react";
import { Button, Image, StyleSheet, View, Alert } from "react-native";

function Task27() {
  const images = [
    require("../assets/image1.jpg"),
    require("../assets/image2.jpg"),
    require("../assets/image4.jpg"),
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  function handleAlert() {
    Alert.alert("Choose Image", "Select an image to highlight", [
      {
        text: "Image 1",
        onPress: () => setSelectedImage(0),
      },
      {
        text: "Image 2",
        onPress: () => setSelectedImage(1),
      },
      {
        text: "Image 3",
        onPress: () => setSelectedImage(2),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {images.map((img, index) => (
          <Image key={index} source={img} 
            style={[ styles.image,
              (selectedImage === index) && styles.selectedImage ]}
          />
        ))}
      </View>
      <Button title="Choose Image" onPress={handleAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  imageContainer: {
    flexDirection: "row", // Display images in a row
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    resizeMode: "contain",
  },
  selectedImage: {
    borderWidth: 3,
    borderColor: "yellow",
    width: 120, 
    height: 120,
  },
});

export default Task27;
