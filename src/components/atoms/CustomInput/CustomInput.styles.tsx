import styled from '@emotion/native';
import { ViewProps } from 'react-native';
import { CustomText } from '@components/atoms';
import { ThemeType } from '@theme/Themes';
import { scaleBySize } from '@utils/Scale';
import { applyOpacityToHex } from '@utils/Opacity';
import { CustomInputProps } from './CustomInput';

export const StyledContainer = styled.View(
  ({
    theme,
    error,
  }: ViewProps & {
    theme: ThemeType;
    error: CustomInputProps['error'];
  }) => ({
    height: scaleBySize(50),
    paddingHorizontal: theme.spacings.lg,
    borderRadius: theme.borderRadius.lg,
    borderTopWidth: scaleBySize(3),
    borderLeftWidth: scaleBySize(3),
    borderBottomWidth: scaleBySize(1),
    borderRightWidth: scaleBySize(1),
    borderColor: error ? theme.colors.danger400 : theme.colors.background200,
    backgroundColor: applyOpacityToHex(
      theme.colors.background200,
      theme.opacities[100],
    ),
  }),
);

export const StyledInput = styled.TextInput(({ theme, value }) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  paddingTop: value ? scaleBySize(theme.spacings.lg) : 0,
  paddingHorizontal: scaleBySize(theme.spacings.lg),
  fontSize: theme.fontSizes.md,
  color: theme.colors.text300,
}));

export const StyledCustomText = styled(CustomText)(({ theme }) => ({
  marginTop: scaleBySize(theme.spacings.md),
  marginLeft: scaleBySize(theme.spacings.sm),
  color: theme.colors.text200,
}));

export const StyledErrorCustomText = styled(CustomText)(({ theme }) => ({
  marginTop: scaleBySize(theme.spacings.md),
  marginLeft: scaleBySize(theme.spacings.lg),
  color: theme.colors.danger400,
}));
