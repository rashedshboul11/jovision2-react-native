import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Pressable } from 'react-native';
import Video from 'react-native-video';

function Task33() {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={togglePlayPause}>
        <Video
          ref={videoRef}
          source={require('../assets/video.mp4')}
          style={styles.video}
          resizeMode="contain"
          paused={paused}
          controls={false} 
          repeat
          poster={require("../assets/image1.jpg")}
        />
      </Pressable>
    </View>
  );
}

const { width } = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  video: {
    width: width,
    height: width, 
    backgroundColor: '#000',
  },
});

export default Task33;
