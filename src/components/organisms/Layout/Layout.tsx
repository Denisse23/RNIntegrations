import React from 'react';
import { ScrollView, ViewProps } from 'react-native';
import { StyledContainer, StyledSafeAreView } from './Layout.styles';

export interface LayoutProps {
  scroll?: boolean;
  children?: React.ReactNode;
  testID?: ViewProps['testID'];
}

const Layout = ({ scroll = true, testID, children }: LayoutProps) => {
  const getContainer = () => {
    return <StyledContainer>{children}</StyledContainer>;
  };
  return (
    <StyledSafeAreView testID={testID} accessibilityLabel={testID}>
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
