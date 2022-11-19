# React Native Integrations App

<h2>About...</h2>

- Ilustrate a basic React Native app functionallity.
- Goal: Support some esential libraries and a few implementations needed to be ready to start a new RN App.

<h2>Project default configurations</h2>

- React Native CLI
- Language: Typescript
- Linting tool: EsLint
- Code formatter: Prettier
  (Runs Prettier as an ESLint rule for the eslint-plugin-prettier. It is used as dev dependency)
- Styling lib: emotion/native

<h2>Setup</h2>

[Follow this guide for React Native CLI - macOS - iOS and android](https://reactnative.dev/docs/environment-setup)

<h3>Uses</h3>

- React Native v0.70.1
- Node v16.10.0 (Look at \.node-version)
- Ruby v2.7.5 (Look at \.ruby-version)

<h3>Steps to Run</h3>

```
yarn install
```

```
cd ios
```

```
bundle install
```

```
pod install
```

<h4>Android</h4>
Development Environment
```
yarn android_dev
```
QA Environment
```
yarn android_qa
```
Production Environment
```
yarn android_prod
```

<h4>ios</h4>
Development Environment
```
yarn ios_dev
```
QA Environment
```
yarn ios_qa
```
Production Environment
```
yarn ios_prod
```

<h2>Implementations</h2>

- Environments handling with [react-native-config] (https://github.com/luggit/react-native-config)
- Strings Localization
- Theming with emotion and custom
- UI Testing: Jest snapshots
