import { CustomInputProps } from '@components/atoms';
import strings from '@localization';
import REGEX from './Regex';

export default {
  name: {
    regexp: REGEX.name,
    regexError: strings.authentication.nameInputError,
    maxLength: 50,
  } as CustomInputProps,
  email: {
    autoCapitalize: 'none',
    keyboardType: 'email-address',
    regexp: REGEX.email,
    regexError: strings.authentication.emailInputError,
    maxLength: 100,
  } as CustomInputProps,
  password: {
    textContentType: 'password',
    secureTextEntry: true,
    keyboardType: 'default',
    autoCapitalize: 'none',
    multiline: false,
  } as CustomInputProps,
  newPassword: {
    autoCapitalize: 'none',
    keyboardType: 'default',
    textContentType: 'newPassword',
    multiline: false,
    regexp: REGEX.newPassword,
    regexError: strings.authentication.newPasswordInputError,
    secureTextEntry: true,
    maxLength: 100,
  } as CustomInputProps,
};
