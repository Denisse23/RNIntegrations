import 'react-native-gesture-handler/jestSetup';
import { NativeModules } from 'react-native';

// monkey patching the locale to avoid the error:
//  Something went wrong initializing the native ReactLocalization module
NativeModules.ReactLocalization = {
  language: 'en_US',
};

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => null;

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// As of react-native@0.64.X file has moved
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

//Resolve test error: Invariant Violation: `new NativeEventEmitter()` requires a non-null argument.
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-device-info', () => ({
  getBuildNumber: jest.fn(() => 'buildNumber'),
  getVersion: jest.fn(() => 'appVersion'),
  getUniqueId: jest.fn(() => 'deviceId'),
  isTablet: jest.fn(() => false),
}));
