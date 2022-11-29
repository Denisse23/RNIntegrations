import React from 'react';
import renderer from 'react-test-renderer';
import FormLayout from './FormLayout';
import { CustomText } from '@components/atoms';
import CustomThemeProvider from '@theme/CustomThemeProvider';

describe('FormLayout', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(
      <CustomThemeProvider>
        <FormLayout>
          <CustomText>Test</CustomText>
        </FormLayout>
      </CustomThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
