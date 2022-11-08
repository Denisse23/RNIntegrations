import styled from '@emotion/native';
import { CustomTextProps } from './CustomText';

export const StyledText = styled.Text<CustomTextProps>(
  ({ theme, size = 'sm', type = 'regular' }) => ({
    color: theme.colors.text300,
    fontSize: theme.fontSizes[size],
    fontWeight: type === 'bold' ? '700' : '400',
  }),
);
