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
      "@components": "./src/components",
      "@constants": "./src/constants",
      "@enums": "./src/enums",
      "@hooks": "./src/hooks",
      "@localization": "./src/localization",
      "@navigation": "./src/navigation",
      "@state": "./src/state",
      "@services": "./src/services",
      "@styles": "./src/styles",
      "@theme": "./src/theme",
      "@utils": "./src/utils",
    }
  }], 'react-native-reanimated/plugin'],
};
