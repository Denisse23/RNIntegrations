import styled from '@emotion/native';
import { ThemeType } from '@theme/Themes';
import { scaleBySize } from '@utils/Scale';
import { getStateThemeColor } from '@utils/Theme';
import { ButtonProps } from './Button';

const getButtonBackgroundColor = (
  theme: ThemeType,
  type?: ButtonProps['type'],
  state?: ButtonProps['state'],
) => {
  switch (type) {
    case 'primary':
      return getStateThemeColor(theme, state) ?? theme.colors.background400;
    case 'secondary':
      return theme.colors.background300;
    case 'primaryText':
      return theme.colors.background100;
  }
};

export const StyledButton = styled.TouchableOpacity<ButtonProps>(
  ({ theme, type, state, disabled }) => ({
    backgroundColor: getButtonBackgroundColor(theme, type, state),
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleBySize(46),
    borderRadius: theme.borderRadius.lg,
    opacity: disabled ? theme.opacities[300] : theme.opacities[500],
  }),
);
