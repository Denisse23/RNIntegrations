import React from 'react';
import { useTheme } from '@emotion/react';
import { TouchableOpacityProps } from 'react-native';
import { CustomText } from '@components/atoms';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends TouchableOpacityProps {
  type: 'primary' | 'secondary' | 'primaryText' | 'secondaryText';
  text: string;
}

const Button = ({ type, text, ...rest }: ButtonProps) => {
  const theme = useTheme();
  const buttonTextColor = () => {
    switch (type) {
      case 'primary':
        return theme.colors.text300;
      case 'secondary':
        return theme.colors.text100;
      case 'primaryText':
        return theme.colors.text300;
      case 'secondaryText':
        return theme.colors.text200;
    }
  };

  return (
    <StyledButton
      type={type}
      text={text}
      activeOpacity={theme.opacities[300]}
      {...rest}
    >
      <CustomText
        type={'bold'}
        size={'md'}
        style={{ color: buttonTextColor() }}
      >
        {text}
      </CustomText>
    </StyledButton>
  );
};

export default Button;
