import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

function Task32() {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require('../assets/video.mp4')}
        style={styles.video}
        resizeMode="contain"
        paused={paused}
        controls={true}
        repeat
        onTouchStart={() => setPaused(!paused)}
        poster={require("../assets/image1.jpg")}
      />
    </View>
  );
}

const { width } = Dimensions.get('window'); //get the width of the device screen 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  video: {
    width: width,
    height: width, // 16:9 aspect ratio
    backgroundColor: '#000',
  },
});

export default Task32;