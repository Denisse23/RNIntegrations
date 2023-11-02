import styled from '@emotion/native';
import { getStateThemeColor } from '@utils/Theme';
import { CustomTextProps } from './CustomText';

export const StyledText = styled.Text<CustomTextProps>(
  ({ theme, size, type, state }) => ({
    color: getStateThemeColor(theme, state) ?? theme.colors.text300,
    fontSize: size ? theme.fontSizes[size] : theme.fontSizes.sm,
    fontWeight: type === 'bold' ? '700' : '400',
  }),
);
