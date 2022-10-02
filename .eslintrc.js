module.exports = {
  root: true,
  extends: [
    '@react-native-community/eslint-config', // Default RN config
    'standard-with-typescript', // RN plugins for standard with typescritp
    'eslint-config-prettier' // Disable prettier rules that conflict with eslint
  ],
  parser: '@typescript-eslint/parser', // RN plugins for standard with typescritp
  plugins: [
    '@typescript-eslint', // RN plugins for typescritp
    'react', // RN plugins for react
    'react-native' // RN plugins for react-native
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'project': './tsconfig.json' // Required for Standard plugin
  },
  'env': {
    'react-native/react-native': true
  },
  'rules': {
    'prettier/prettier': 'off', // Turn off prettier
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'error',
    'react-native/no-raw-text': ['warn', {
      skip: ['CustomText']
    }],
    'react-native/no-single-element-style-arrays': 'warn',
    'object-curly-spacing': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/require-array-sort-compare': ['error', {
      ignoreStringArrays: true
    }],
    'react/jsx-curly-spacing': ['error', {
      when: 'always',
      allowMultiline: true,
      children: true
    }],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    semi: ['error', 'never'],
    // Indent with 2 spaces
    indent: ['error', 2],
    // Indent JSX with 2 spaces
    'react/jsx-indent': ['error', 2],
    // Indent props with 2 spaces
    'react/jsx-indent-props': ['error', 2]
  }
}
