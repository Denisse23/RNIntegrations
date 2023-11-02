import React from 'react';
import { TextProps } from 'react-native';
import { STATES } from '@enums';
import { StyledText } from './CustomText.styles';

export interface CustomTextProps extends TextProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  type?: 'bold' | 'regular';
  state?: STATES;
}

const CustomText = ({
  size,
  type,
  state,
  testID,
  children,
  ...rest
}: CustomTextProps) => {
  return (
    <StyledText
      size={size}
      type={type}
      state={state}
      testID={testID}
      accessibilityLabel={testID}
      {...rest}>
      {children}
    </StyledText>
  );
};

export default CustomText;
