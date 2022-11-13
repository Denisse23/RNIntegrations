import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, CustomInput, CustomText } from '@components/atoms';
import { FormLayout } from '@components/organisms';
import { NavigationType } from '@navigation/types';
import { Divider, LargeDivider } from '@styles/SharedStyles';
import { INPUT_COMMON_PROPS } from '@constants';
import { StyledContainer } from './LoginScreen.styles';
import strings from '@localization';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const loginDisabled = () => {
    return !emailValue || !passwordValue || !!emailError || !!passwordError;
  };

  return (
    <FormLayout>
      <StyledContainer>
        <CustomText size="xxl" type="bold">
          {strings.authentication.login}
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
          {...INPUT_COMMON_PROPS.password}
          label={strings.authentication.password}
          value={passwordValue}
          onChangeText={setPasswordValue}
          error={passwordError}
          onChangeError={setPasswordError}
        />
        <LargeDivider />
        <LargeDivider />
        <Button
          text={strings.authentication.login}
          type="primary"
          disabled={loginDisabled()}
        />
        <Button
          text={strings.authentication.notAccount}
          type="secondaryText"
          onPress={() => navigation.navigate('SignUpScreen')}
        />
      </StyledContainer>
    </FormLayout>
  );
};

export default LoginScreen;
