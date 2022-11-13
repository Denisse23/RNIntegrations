import React from 'react';
import { Keyboard } from 'react-native';
import { Layout } from '@components/organisms';
import { StyledTouchableWithoutFeedback } from './FormLayout.styles';

export interface FormLayoutProps {
  children?: React.ReactNode;
}

const FormLayout = ({ children }: FormLayoutProps) => {
  return (
    <Layout>
      <StyledTouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
      </StyledTouchableWithoutFeedback>
    </Layout>
  );
};

export default FormLayout;
