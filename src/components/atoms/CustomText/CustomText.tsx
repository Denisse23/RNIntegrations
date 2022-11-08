import React from 'react';
import { TextProps } from 'react-native';
import { StyledText } from './CustomText.style';
export interface CustomTextProps extends TextProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  type?: 'bold' | 'regular';
}

const CustomText = ({
  size = 'sm',
  type = 'regular',
  children,
  ...rest
}: CustomTextProps) => {
  return (
    <StyledText size={size} type={type} {...rest}>
      {children}
    </StyledText>
  );
};

export default CustomText;
