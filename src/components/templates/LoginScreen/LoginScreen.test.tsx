import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import CustomThemeProvider from '@theme/CustomThemeProvider';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { TEST_IDS } from '@constants';
import LoginScreen from './LoginScreen';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

describe('LoginScreen', () => {
  const initialState = {};
  const mockStore = configureStore();
  const getRender = () => {
    return (
      <Provider store={mockStore(initialState)}>
        <CustomThemeProvider>
          <LoginScreen />
        </CustomThemeProvider>
      </Provider>
    );
  };
  const { getByTestId } = render(getRender());
  it('should not enable button if the inputs are empty', async () => {
    const button = getByTestId(TEST_IDS.buttons.signInButton);

    expect(button.props).toHaveProperty('accessibilityState.disabled', true);
  });

  it('should enable button if the inputs are not empty', async () => {
    const emailInput = getByTestId(TEST_IDS.inputs.emailInput);
    const passwordInput = getByTestId(TEST_IDS.inputs.passwordInput);
    await waitFor(() => {
      fireEvent.changeText(emailInput, 'test@gmail.com');
      fireEvent.changeText(passwordInput, 'Test12345!');
    });

    await waitFor(() => {
      fireEvent.changeText(emailInput, 'test@gmail.com');
    });

    const button = getByTestId(TEST_IDS.buttons.signInButton);

    expect(button.props).toHaveProperty('accessibilityState.disabled', false);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(getRender());
    expect(tree).toMatchSnapshot();
  });
});
