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
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // '@typescript-eslint/no-shadow': ['error'],
        // 'no-shadow': 'off',
        'no-undef': 'off', // Removes false errors when referencing to global declarations
      },
    },
  ],
};
