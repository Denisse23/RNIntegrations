import React, { useMemo } from 'react';
import { TouchableOpacityProps } from 'react-native';
import CustomText, {
  CustomTextProps,
} from '@components/atoms/CustomText/CustomText';
import { useTheme } from '@emotion/react';
import { STATES } from '@enums';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  type?: 'primary' | 'secondary' | 'primaryText';
  state?: STATES;
  customTextProps?: CustomTextProps;
}

const Button = ({
  type,
  state,
  text,
  testID,
  customTextProps,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();
  const buttonTextColor = useMemo(() => {
    switch (type) {
      case 'primary':
        return theme.colors.text300;
      case 'secondary':
        return theme.colors.text100;
      case 'primaryText':
        return theme.colors.text300;
    }
  }, [theme.colors.text100, theme.colors.text300, type]);

  const getCustomTextProps = useMemo(() => {
    return {
      style: !state ? { color: buttonTextColor } : {},
      ...customTextProps,
    } as CustomTextProps;
  }, [buttonTextColor, customTextProps, state]);

  return (
    <StyledButton
      type={type}
      state={state}
      text={text}
      activeOpacity={theme.opacities[300]}
      testID={testID}
      accessibilityLabel={testID}
      {...rest}>
      <CustomText
        type={'bold'}
        size={'md'}
        state={state}
        {...getCustomTextProps}>
        {text}
      </CustomText>
    </StyledButton>
  );
};

export default Button;
