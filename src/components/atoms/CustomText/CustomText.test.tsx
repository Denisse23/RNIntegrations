import React from 'react';
import CustomThemeProvider from '@theme/CustomThemeProvider';
import { triggerForEachTest } from '@utils/Test';
import renderer from 'react-test-renderer';
import { STATES } from '@enums';
import CustomText, { CustomTextProps } from './CustomText';

const customTextTestTypes = [
  {
    type: 'regular',
  },
  {
    type: 'bold',
  },
] as CustomTextProps[];

const customTextTestStates = [
  {
    state: STATES.SUCCESS,
  },
  {
    state: STATES.INFO,
  },
  {
    state: STATES.WARNING,
  },
  {
    state: STATES.DANGER,
  },
] as CustomTextProps[];

const customTextTestSizes = [
  {
    size: 'sm',
  },
  {
    size: 'md',
  },
  {
    size: 'lg',
  },
  {
    size: 'xl',
  },
  {
    size: 'xxl',
  },
] as CustomTextProps[];

describe('CustomText', () => {
  let testCustomTextType = (customTextProps: CustomTextProps) => {
    it(`${Object.values(customTextProps)[0]} should match the snapshot`, () => {
      const tree = renderer.create(
        <CustomThemeProvider>
          <CustomText {...customTextProps}>Test</CustomText>
        </CustomThemeProvider>,
      );
      expect(tree).toMatchSnapshot();
    });
  };

  triggerForEachTest(customTextTestTypes, testCustomTextType);
  triggerForEachTest(customTextTestStates, testCustomTextType);
  triggerForEachTest(customTextTestSizes, testCustomTextType);
});
