import React from 'react';
import { CustomText } from '@components/atoms';
import CustomThemeProvider from '@theme/CustomThemeProvider';
import renderer from 'react-test-renderer';
import FormLayout from './FormLayout';

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
