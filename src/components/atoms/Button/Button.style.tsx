import styled from '@emotion/native';
import { ThemeType } from '@theme';
import { ButtonProps } from './Button';

const getButtonBackgroundColor = (
  theme: ThemeType,
  type: ButtonProps['type'],
) => {
  switch (type) {
    case 'primary':
      return theme.colors.primary500;
    case 'secondary':
      return theme.colors.secondary500;
    case 'primaryText':
      return theme.colors.background100;
    case 'secondaryText':
      return theme.colors.background100;
  }
};

export const StyledButton = styled.TouchableOpacity<ButtonProps>(
  ({ theme, type }) => ({
    backgroundColor: getButtonBackgroundColor(theme, type),
  }),
);
