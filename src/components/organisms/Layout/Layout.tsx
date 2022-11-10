import React from 'react';
import { StyledSafeAreView, StyledContainer } from './Layout.styles';

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledSafeAreView>
      <StyledContainer>{children}</StyledContainer>
    </StyledSafeAreView>
  );
};

export default Layout;
