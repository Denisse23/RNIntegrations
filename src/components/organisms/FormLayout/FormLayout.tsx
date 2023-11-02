import React from 'react';
import { Keyboard, ViewProps } from 'react-native';
import { StyledTouchableWithoutFeedback } from './FormLayout.styles';
import Layout from '../Layout/Layout';

export interface FormLayoutProps {
  testID?: ViewProps['testID'];
  children?: React.ReactNode;
}

const FormLayout = ({ testID, children }: FormLayoutProps) => {
  return (
    <Layout testID={testID}>
      <StyledTouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
      </StyledTouchableWithoutFeedback>
    </Layout>
  );
};

export default FormLayout;
