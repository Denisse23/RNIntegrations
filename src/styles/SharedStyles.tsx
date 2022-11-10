import styled from '@emotion/native';
import { ThemeType } from '@theme/Themes';
import { scaleBySize } from '@utils/Scale';

export const Container = styled.View(() => ({
  flex: 1,
}));

export const ContainerWithCenterJustify = styled.View(() => ({
  justifyContent: 'center',
}));

export const Divider = styled.View(({ theme }) => ({
  height: theme.spacings.xxl,
}));

export const LargeDivider = styled.View(({ theme }) => ({
  height: theme.spacings.xxxl,
}));

export const Shadow = (theme: ThemeType) => {
  return {
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: scaleBySize(40),
      height: scaleBySize(40),
    },
    shadowRadius: theme.borderRadius.lg,
    elevation: scaleBySize(12),
    shadowOpacity: theme.opacities['500'],
  };
};
