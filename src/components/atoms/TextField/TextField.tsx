import React from 'react';
import { Text, TextProps } from 'react-native';

interface TextFieldProps extends TextProps {
  type: string;
}

const TextField = ({ type, children, ...rest }: TextFieldProps) => {
  return <Text {...rest}>{children}</Text>;
};

export default TextField;
