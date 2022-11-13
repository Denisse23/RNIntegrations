import React, { useState } from 'react';
import { Button, CustomInput, CustomText } from '@components/atoms';
import { Layout } from '@components/organisms';
import { Divider, LargeDivider } from '@styles/SharedStyles';
import { StyledContainer } from './LoginScreen.style';
import strings from '@localization';

const LoginScreen = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <Layout>
      <StyledContainer>
        <CustomText size="xxl" type="bold">
          {strings.authentication.login}
        </CustomText>
        <LargeDivider />
        <CustomInput
          label={strings.authentication.email}
          value={emailValue}
          onChangeText={setEmailValue}
        />
        <Divider />
        <CustomInput
          label={strings.authentication.password}
          value={passwordValue}
          onChangeText={setPasswordValue}
        />
        <LargeDivider />
        <LargeDivider />
        <Button text={strings.authentication.login} type="primary" />
        <Button text={strings.authentication.register} type="secondaryText" />
      </StyledContainer>
    </Layout>
  );
};

export default LoginScreen;
