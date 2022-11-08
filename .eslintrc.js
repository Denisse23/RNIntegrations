module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: [
    '@react-native-community', // Default RN config
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'], // RN plugins for typescript
  globals: {
    by: 'readonly',
    device: 'readonly',
    element: 'readonly',
    waitFor: 'readonly',
  },
};
