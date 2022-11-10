import React from 'react';
import { Button, CustomInput, CustomText } from '@components/atoms';
import { Layout } from '@components/organisms';
import { Divider, LargeDivider } from '@styles/SharedStyles';
import { StyledContainer } from './LoginScreen.style';
import strings from '@localization';

const LoginScreen = () => {
  return (
    <Layout>
      <StyledContainer>
        <CustomText size="xxl">{strings.authentication.login}</CustomText>
        <LargeDivider />
        <CustomInput />
        <Divider />
        <CustomInput />
        <LargeDivider />
        <Button text={strings.authentication.login} type="primary" />
      </StyledContainer>
    </Layout>
  );
};

export default LoginScreen;
