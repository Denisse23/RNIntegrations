import styled from '@emotion/native';
import { ContainerWithCenterJustify } from '@styles/SharedStyles';
import { scaleBySize } from '@utils/Scale';

export const StyledContainer = styled(ContainerWithCenterJustify)(
  ({ theme }) => ({
    marginTop: scaleBySize(100),
  }),
);
