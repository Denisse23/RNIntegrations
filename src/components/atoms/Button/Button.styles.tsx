import styled from '@emotion/native';
import { ThemeType } from '@theme/Themes';
import { ButtonProps } from './Button';
import { scaleBySize } from '@utils/Scale';

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
  ({ theme, type, disabled }) => ({
    backgroundColor: getButtonBackgroundColor(theme, type),
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleBySize(46),
    borderRadius: theme.borderRadius.lg,
    opacity: disabled ? theme.opacities[300] : theme.opacities[500],
  }),
);
