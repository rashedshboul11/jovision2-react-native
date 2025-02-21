import { FlatList, View, Image, StyleSheet, Pressable, Alert} from "react-native";

function Task28() {
    const images = [
    require("../assets/image1.jpg"),
    require("../assets/image2.jpg"),
    require("../assets/image3.jpg"),
    require("../assets/image4.jpg"),
    require("../assets/image5.jpg"),
    require("../assets/image6.jpg"),
    require("../assets/image7.jpg"),
    require("../assets/image8.jpg"),
    require("../assets/image9.jpg"),
    require("../assets/image10.jpg"),
    ]
    function handleImageRender({ item, index }) {
        return (
            <View>
            <Pressable onPress={() => Alert.alert(`Image ${index + 1} Pressed`, 
                `This is image at index ${index + 1}`)}>
            <Image source={item} style={styles.image} />
            </Pressable>
            </View>
            
        );
    }
    
 return (
    <View>
        <FlatList 
            data={images}
            renderItem={handleImageRender} // recive Object contains the item and index
            keyExtractor={(item, index) => index.toString()}
        />
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
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 15,
    marginVertical: 15, 
    resizeMode: "contain",
    alignContent: "center", 
  },
});
export default Task28;