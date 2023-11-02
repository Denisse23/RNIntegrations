import React from 'react';
import { CustomText } from '@components/atoms';
import CustomThemeProvider from '@theme/CustomThemeProvider';
import renderer from 'react-test-renderer';
import Layout from './Layout';

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
