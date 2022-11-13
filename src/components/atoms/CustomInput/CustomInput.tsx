import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from '@emotion/react';
import {
  StyledInput,
  StyledContainer,
  StyledCustomText,
} from './CustomInput.styles';

interface CustomInputProps extends TextInputProps {
  label?: string;
}

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  ...rest
}: CustomInputProps) => {
  const theme = useTheme();

  return (
    <StyledContainer>
      {value && <StyledCustomText>{label}</StyledCustomText>}
      <StyledInput
        placeholder={label ? label : placeholder}
        placeholderTextColor={theme.colors.text200}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </StyledContainer>
  );
};

export default CustomInput;
