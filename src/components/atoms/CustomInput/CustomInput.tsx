import React, { useEffect, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from '@emotion/react';
import {
  StyledInput,
  StyledContainer,
  StyledCustomText,
  StyledErrorCustomText,
} from './CustomInput.styles';
import strings from '@localization';

export interface CustomInputProps extends TextInputProps {
  label?: string;
  regexError?: string;
  regexp?: RegExp;
  error?: string | null;
  onChangeError?: (error: string | null) => void;
}

const CustomInput = ({
  label,
  regexError,
  regexp,
  error,
  onChangeError,
  placeholder,
  value,
  onChangeText,
  testID,
  ...rest
}: CustomInputProps) => {
  const theme = useTheme();

  const checkRegex = useCallback(() => {
    if (regexp && value && onChangeError) {
      if (!regexp.test(value)) {
        onChangeError(regexError || strings.common.genericInputError);
      } else {
        onChangeError(null);
      }
    }
  }, [onChangeError, regexError, regexp, value]);

  useEffect(() => {
    checkRegex();
  }, [checkRegex]);

  return (
    <>
      <StyledContainer error={error} theme={theme}>
        {value && <StyledCustomText>{label}</StyledCustomText>}
        <StyledInput
          placeholder={label ? label : placeholder}
          placeholderTextColor={theme.colors.text200}
          value={value}
          onChangeText={onChangeText}
          testID={testID}
          accessibilityLabel={testID}
          {...rest}
        />
      </StyledContainer>
      {error && <StyledErrorCustomText>{error}</StyledErrorCustomText>}
    </>
  );
};

export default CustomInput;
