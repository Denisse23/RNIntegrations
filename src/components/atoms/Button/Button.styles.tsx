import styled from '@emotion/native';
import { ThemeType } from '@theme/Themes';
import { ButtonProps } from './Button';
import { Shadow } from '@styles/SharedStyles';

const getButtonBackgroundColor = (
  theme: ThemeType,
  type: ButtonProps['type'],
) => {
  switch (type) {
    case 'primary':
      return theme.colors.background400;
    case 'secondary':
      return theme.colors.background300;
    case 'primaryText':
      return theme.colors.background100;
    case 'secondaryText':
      return theme.colors.background100;
  }
};

export const StyledButton = styled.TouchableOpacity<ButtonProps>(
  ({ theme, type }) => ({
    backgroundColor: getButtonBackgroundColor(theme, type),
    alignItems: 'center',
    padding: theme.spacings.xl,
    borderRadius: theme.borderRadius.lg,
    opacity: theme.opacities[300],
    ...Shadow,
  }),
);
