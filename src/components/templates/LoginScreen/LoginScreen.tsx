import React, { useState } from 'react';
import { Button, CustomInput, CustomText } from '@components/atoms';
import { FormLayout } from '@components/organisms';
import { NavigationType } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { Divider, LargeDivider } from '@styles/SharedStyles';
import { BUILD_ENV } from 'react-native-config';
import { INPUT_COMMON_PROPS, TEST_IDS } from '@constants';
import { useAuth } from '@hooks';
import strings from '@localization';
import { StyledContainer } from './LoginScreen.styles';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationType>();

  const { onLoginPress } = useAuth();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const loginDisabled = () => {
    return !emailValue || !passwordValue || !!emailError || !!passwordError;
  };

  return (
    <FormLayout testID={TEST_IDS.templates.signInScreen}>
      <StyledContainer>
        <CustomText size="xxl" type="bold">
          {`${strings.authentication.login} ${BUILD_ENV}`}
        </CustomText>
        <LargeDivider />
        <CustomInput
          {...INPUT_COMMON_PROPS.email}
          label={strings.authentication.email}
          value={emailValue}
          onChangeText={setEmailValue}
          error={emailError}
          onChangeError={setEmailError}
          testID={TEST_IDS.inputs.emailInput}
        />
        <Divider />
        <CustomInput
          {...INPUT_COMMON_PROPS.password}
          label={strings.authentication.password}
          value={passwordValue}
          onChangeText={setPasswordValue}
          error={passwordError}
          onChangeError={setPasswordError}
          testID={TEST_IDS.inputs.passwordInput}
        />
        <LargeDivider />
        <LargeDivider />
        <Button
          text={strings.authentication.login}
          type="primary"
          disabled={loginDisabled()}
          testID={TEST_IDS.buttons.signInButton}
          onPress={onLoginPress}
        />
        <Button
          text={strings.authentication.notAccount}
          type="primaryText"
          onPress={() => navigation.navigate('SignUpScreen')}
          testID={TEST_IDS.buttons.notAccountButton}
        />
      </StyledContainer>
    </FormLayout>
  );
};

export default LoginScreen;
