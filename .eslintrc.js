module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: [
    '@react-native-community', // Default RN config
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint', // RN plugins for typescript
    'import', // For sorting imports
  ], // RN plugins for typescript
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': 'error', // Enable -> Add validations for upper scope var shadowing for typescript
        'no-shadow': 'off', // Disable -> Remove false errors when declaring enums
        'no-undef': 'off', // Disable -> Remove false errors when referencing to global declarations
        'sort-imports': [
          'error',
          { ignoreCase: true, ignoreDeclarationSort: true },
        ], // this is for sorting within an import
        'import/order': [
          'error',
          {
            groups: [
              ['external', 'builtin'],
              'internal',
              ['sibling', 'parent'],
              'index',
            ],
            pathGroups: [
              {
                pattern: '@(react|react-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@*',
                group: 'internal',
              },
            ],
            pathGroupsExcludedImportTypes: ['internal', 'react'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ], // this is for sorting imports
      },
    },
  ],
};
