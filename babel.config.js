module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['module-resolver', {
    extensions: [
      '.ios.ts',
      '.android.ts',
      '.ts',
      '.ios.tsx',
      '.android.tsx',
      '.tsx',
      '.jsx',
      '.js',
      '.json',
    ],
    alias: {
      "@components": "./src/components/*",
      "@localization": "./src/localization",
      "@redux": "./src/redux/*",
      "@services": "./src/services/*",
      "@styles": "./src/styles/*",
      "@theme": "./src/theme",
      "@utils": "./src/utils/*",
    }
  }]],
};
