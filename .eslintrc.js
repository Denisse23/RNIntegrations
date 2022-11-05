module.exports = {
  root: true,
  extends: [
    '@react-native-community', // Default RN config
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'], // RN plugins for typescript
};
