const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  resolver: {
    assetExts: [
      'jpg', 'png', 'gif', 'svg', 'ttf', 'otf', 'mp4', 'mp3', 'wav', 'json'
    ]
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
