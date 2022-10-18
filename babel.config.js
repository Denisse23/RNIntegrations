module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};

const alias = {
  components: './src/components',
  localization: './src/localization',
  redux: './src/redux',
  services: './src/services',
  styles: './src/styles',
  theme: './src/theme',
  utils: './src/utils',
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['module-resolver', { alias }]],
};
