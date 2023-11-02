import React, { useCallback, useEffect } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from '@emotion/react';
import strings from '@localization';
import {
  StyledContainer,
  StyledCustomText,
  StyledErrorCustomText,
  StyledInput,
} from './CustomInput.styles';

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
