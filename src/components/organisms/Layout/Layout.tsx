import React from 'react';
import { ScrollView } from 'react-native';
import { StyledSafeAreView, StyledContainer } from './Layout.styles';

export interface LayoutProps {
  scroll?: Boolean;
  children?: React.ReactNode;
}

const Layout = ({ scroll = true, children }: LayoutProps) => {
  const getContainer = () => {
    return <StyledContainer>{children}</StyledContainer>;
  };
  return (
    <StyledSafeAreView>
      {scroll ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {getContainer()}
        </ScrollView>
      ) : (
        getContainer()
      )}
    </StyledSafeAreView>
  );
};

export default Layout;
