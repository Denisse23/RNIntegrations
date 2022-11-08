import React from 'react';
import renderer from 'react-test-renderer';
import CustomText from './CustomText';
import CustomThemeProvider from '@theme/CustomThemeProvider';

describe('CustomText', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(
      <CustomThemeProvider>
        <CustomText>Test</CustomText>
      </CustomThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
