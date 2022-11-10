import styled from '@emotion/native';
import { scaleBySize } from '@utils/Scale';
import { Shadow } from '@styles/SharedStyles';

export const StyledContainer = styled.View(({ theme }) => ({
  height: scaleBySize(50),
  paddingHorizontal: theme.spacings.lg,
  borderRadius: theme.borderRadius.lg,
  borderWidth: 10,
  borderColor: theme.colors.background200,
  backgroundColor: theme.colors.background200,
  shadowColor: theme.colors.shadow,
  // shadowOffset: {
  //   width: scaleBySize(-2),
  //   height: scaleBySize(-2),
  // },
  shadowRadius: 10,
  //elevation: scaleBySize(12),
  shadowOpacity: theme.opacities['500'],
}));

export const StyledInput = styled.TextInput(({ theme }) => ({
  height: '100%',
  fontSize: theme.fontSizes.md,
}));
