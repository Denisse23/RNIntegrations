# React Native Integrations App

<h2>About...</h2>

- Ilustrate a basic React Native app functionallity.
- Goal: Support some esential libraries and a few implementations needed to be ready to start a new RN App.

<h2>Project default configurations</h2>

- React Native CLI
- Language: Typescript
- Linting tool: EsLint
  Recommendation: Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension.
  - Organize imports: eslint-plugin-import
- Code formatter: Prettier ESLint
  Recommendation: Install [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) extension.
- Styling lib: emotion/native

<h2>Setup</h2>

[Follow this guide for React Native CLI - macOS - iOS and android](https://reactnative.dev/docs/environment-setup)

<h3>Uses</h3>

- React Native v0.70.1
- Node v16.10.0 (Look at \.node-version)
- Ruby v3.0.5 (Look at \.ruby-version)

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
- Storybook to UI components visualization and documentation [storybook](https://storybook.js.org/docs/react/get-started/introduction)
- State management: [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- Services: [RKT Query](https://redux-toolkit.js.org/rtk-query/overview) Redux Toolkit package: Allows to handle fetching functionality like: save the data in the store, managing states fetching, error, result, caching, etc.

<h3>Steps to launch storybook</h3>

In index.js file:

- Temporary comment line 6 to 10.
- Temporary uncomment line 13.
- Then run storybook and the app.

```
yarn storybook
```

```
yarn ios_dev
```

or

```
yarn android_dev
```

You should be able to select the stories in the [localhost](http://localhost:7007/?path=/story/welcome--to-storybook) and see the component rendered in the simulator/emulator.
<img width="1438" alt="Screen Shot 2022-11-29 at 10 54 02" src="https://user-images.githubusercontent.com/6572064/204593623-0d751e46-b427-4a1b-912f-77b59bf2ff10.png">
