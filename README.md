# React Native Integrations App

<h2>About...</h2>

- Ilustrate a basic React Native app functionallity.
- Goal: Support some esential libraries and a few implementations needed to be ready to start a new RN App.

<h2>Project default configuratios</h2>

- React Native CLI
- Language: Typescript
- Linting tool: EsLint
- Code formatter: Prettier
  (Runs Prettier as an ESLint rule for that eslint-plugin-prettier is used as dev dependency)
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

```
yarn android
```

<h4>ios</h4>

```
yarn ios
```

<h2>Implementations</h2>

- Strings Localization
- Theming with emotion and custom
- UI Testing: Jest snapshots
