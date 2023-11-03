import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import CustomThemeProvider from '@theme/CustomThemeProvider';
import renderer from 'react-test-renderer';
import { TEST_IDS } from '@constants';
import SignUpScreen from './SignUpScreen';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

describe('SignUpScreen', () => {
  it('should not enable button if the inputs are empty', async () => {
    const { getByTestId } = render(
      <CustomThemeProvider>
        <SignUpScreen />
      </CustomThemeProvider>,
    );

    const button = getByTestId(TEST_IDS.buttons.signUpButton);

    expect(button.props).toHaveProperty('accessibilityState.disabled', true);
  });

  it('should not enable button if the passwords are different', async () => {
    const { getByTestId } = render(
      <CustomThemeProvider>
        <SignUpScreen />
      </CustomThemeProvider>,
    );

    const emailInput = getByTestId(TEST_IDS.inputs.emailInput);
    const passwordInput = getByTestId(TEST_IDS.inputs.passwordInput);
    const confirmPasswordInput = getByTestId(
      TEST_IDS.inputs.configmPasswordInput,
    );
    await waitFor(() => {
      fireEvent.changeText(emailInput, 'test@gmail.com');
      fireEvent.changeText(passwordInput, 'Test12346!');
      fireEvent.changeText(confirmPasswordInput, 'Test12345!');
    });

    const button = getByTestId(TEST_IDS.buttons.signUpButton);

    expect(button.props).toHaveProperty('accessibilityState.disabled', false);
  });

  it('should not enable button if the password is short', async () => {
    const { getByTestId } = render(
      <CustomThemeProvider>
        <SignUpScreen />
      </CustomThemeProvider>,
    );

    const emailInput = getByTestId(TEST_IDS.inputs.emailInput);
    const passwordInput = getByTestId(TEST_IDS.inputs.passwordInput);
    const confirmPasswordInput = getByTestId(
      TEST_IDS.inputs.configmPasswordInput,
    );
    await waitFor(() => {
      fireEvent.changeText(emailInput, 'test@gmail.com');
      fireEvent.changeText(passwordInput, 'Test1');
      fireEvent.changeText(confirmPasswordInput, 'Test1');
    });

    const button = getByTestId(TEST_IDS.buttons.signUpButton);

    expect(button.props).toHaveProperty('accessibilityState.disabled', false);
  });

  it('should not enable button if the password is missing special character', async () => {
    const { getByTestId } = render(
      <CustomThemeProvider>
        <SignUpScreen />
      </CustomThemeProvider>,
    );

    const emailInput = getByTestId(TEST_IDS.inputs.emailInput);
    const passwordInput = getByTestId(TEST_IDS.inputs.passwordInput);
    const confirmPasswordInput = getByTestId(
      TEST_IDS.inputs.configmPasswordInput,
    );
    await waitFor(() => {
      fireEvent.changeText(emailInput, 'test@gmail.com');
      fireEvent.changeText(passwordInput, 'Test1234');
      fireEvent.changeText(confirmPasswordInput, 'Test1234');
    });

    const button = getByTestId(TEST_IDS.buttons.signUpButton);

    expect(button.props).toHaveProperty('accessibilityState.disabled', false);
  });

  it('should enable button if the inputs are not empty and passwords are the same and strong', async () => {
    const { getByTestId } = render(
      <CustomThemeProvider>
        <SignUpScreen />
      </CustomThemeProvider>,
    );

    const emailInput = getByTestId(TEST_IDS.inputs.emailInput);
    const passwordInput = getByTestId(TEST_IDS.inputs.passwordInput);
    const confirmPasswordInput = getByTestId(
      TEST_IDS.inputs.configmPasswordInput,
    );
    await waitFor(() => {
      fireEvent.changeText(emailInput, 'test@gmail.com');
      fireEvent.changeText(passwordInput, 'Test12345!');
      fireEvent.changeText(confirmPasswordInput, 'Test12345!');
    });

    const button = getByTestId(TEST_IDS.buttons.signUpButton);

    expect(button.props).toHaveProperty('accessibilityState.disabled', false);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(
      <CustomThemeProvider>
        <SignUpScreen />
      </CustomThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
