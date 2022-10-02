module.exports = {
  root: true,
  extends: [
    '@react-native-community/eslint-config', // Default RN config
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser', // RN plugins for typescritp
  plugins: [
    '@typescript-eslint', // RN plugins for typescritp
    'react', // RN plugins for react
    'react-native', // RN plugins for react-native
  ],
};
