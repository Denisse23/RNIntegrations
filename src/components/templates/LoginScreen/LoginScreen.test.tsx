import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';
import CustomThemeProvider from '@theme/CustomThemeProvider';
import { TEST_IDS } from '@constants';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

describe('LoginScreen', () => {
  it('should not enable button if the inputs are empty', async () => {
    const { getByTestId } = render(
      <CustomThemeProvider>
        <LoginScreen />
      </CustomThemeProvider>,
    );

    const emailInput = getByTestId(TEST_IDS.inputs.emailInput);
    await waitFor(() => {
      fireEvent.changeText(emailInput, 'test@gmail.com');
    });

    await waitFor(() => {
      fireEvent.changeText(emailInput, 'test@gmail.com');
    });

    const button = getByTestId(TEST_IDS.buttons.signInButton);

    expect(button.props).toHaveProperty('accessibilityState.disabled', true);
  });

  it('should enable button if the inputs are not empty', async () => {
    const { getByTestId } = render(
      <CustomThemeProvider>
        <LoginScreen />
      </CustomThemeProvider>,
    );

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
    const tree = renderer.create(
      <CustomThemeProvider>
        <LoginScreen />
      </CustomThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
