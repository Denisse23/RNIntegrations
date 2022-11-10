import styled from '@emotion/native';
import { Container } from '@styles/SharedStyles';

export const StyledSafeAreView = styled.SafeAreaView(() => ({
  flex: 1,
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacings.xxl,
}));
