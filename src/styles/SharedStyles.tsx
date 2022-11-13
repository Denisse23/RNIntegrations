import styled from '@emotion/native';

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
