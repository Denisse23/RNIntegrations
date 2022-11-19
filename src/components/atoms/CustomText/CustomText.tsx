import React from 'react';
import { TextProps } from 'react-native';
import { StyledText } from './CustomText.styles';
export interface CustomTextProps extends TextProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  type?: 'bold' | 'regular';
}

const CustomText = ({
  size,
  type,
  testID,
  children,
  ...rest
}: CustomTextProps) => {
  return (
    <StyledText
      size={size}
      type={type}
      testID={testID}
      accessibilityLabel={testID}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default CustomText;
