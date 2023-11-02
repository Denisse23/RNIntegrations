import React, { useEffect, useState } from 'react';
import { Button, CustomInput, CustomText } from '@components/atoms';
import { FormLayout } from '@components/organisms';
import { NavigationType } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { Divider, LargeDivider } from '@styles/SharedStyles';
import { INPUT_COMMON_PROPS, TEST_IDS } from '@constants';
import strings from '@localization';
import { StyledContainer } from './SignUpScreen.styles';

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationType>();

  const [emailValue, setEmailValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (confirmPasswordValue && !passwordError) {
      if (confirmPasswordValue !== passwordValue) {
        setConfirmPasswordError(strings.authentication.confirmPasswordError);
      } else {
        setConfirmPasswordError(null);
      }
    }
  }, [confirmPasswordValue, passwordError, passwordValue]);

  const signUpDisabled = () => {
    return (
      !emailValue ||
      !firstNameValue ||
      !lastNameValue ||
      !passwordValue ||
      !confirmPasswordValue ||
      !!emailError ||
      !!firstNameError ||
      !!lastNameError ||
      !!passwordError ||
      !!confirmPasswordError
    );
  };

  return (
    <FormLayout testID={TEST_IDS.templates.signUpScreen}>
      <StyledContainer>
        <CustomText size="xxl" type="bold">
          {strings.authentication.createAnAccount}
        </CustomText>
        <LargeDivider />
        <CustomInput
          {...INPUT_COMMON_PROPS.email}
          label={strings.authentication.email}
          value={emailValue}
          onChangeText={setEmailValue}
          error={emailError}
          onChangeError={setEmailError}
        />
        <Divider />
        <CustomInput
          {...INPUT_COMMON_PROPS.name}
          label={strings.authentication.firstName}
          value={firstNameValue}
          onChangeText={setFirstNameValue}
          error={firstNameError}
          onChangeError={setFirstNameError}
        />
        <Divider />
        <CustomInput
          {...INPUT_COMMON_PROPS.name}
          label={strings.authentication.lastName}
          value={lastNameValue}
          onChangeText={setLastNameValue}
          error={lastNameError}
          onChangeError={setLastNameError}
        />
        <Divider />
        <CustomInput
          {...INPUT_COMMON_PROPS.newPassword}
          label={strings.authentication.password}
          value={passwordValue}
          onChangeText={setPasswordValue}
          error={passwordError}
          onChangeError={setPasswordError}
        />
        <Divider />
        <CustomInput
          {...INPUT_COMMON_PROPS.password}
          label={strings.authentication.confirmPassword}
          value={confirmPasswordValue}
          onChangeText={setConfirmPasswordValue}
          error={confirmPasswordError}
          onChangeError={setConfirmPasswordError}
        />
        <LargeDivider />
        <LargeDivider />
        <Button
          text={strings.authentication.signUp}
          type="primary"
          disabled={signUpDisabled()}
        />
        <Button
          text={strings.authentication.alreadyHaveAnAccount}
          type="secondaryText"
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </StyledContainer>
    </FormLayout>
  );
};

export default SignUpScreen;
