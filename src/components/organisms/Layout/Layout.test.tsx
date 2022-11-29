import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout';
import { CustomText } from '@components/atoms';
import CustomThemeProvider from '@theme/CustomThemeProvider';

describe('Layout', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(
      <CustomThemeProvider>
        <Layout>
          <CustomText>Test</CustomText>
        </Layout>
      </CustomThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
