import React from 'react';
import renderer from 'react-test-renderer';
import CustomInput, { CustomInputProps } from './CustomInput';
import { INPUT_COMMON_PROPS } from '@constants';
import CustomThemeProvider from '@theme/CustomThemeProvider';

interface CustomInputTestObj extends CustomInputProps {
  incorrectText: string;
  correctText: string;
}

const customInputTests = [
  {
    testID: 'input-email',
    label: 'Email',
    incorrectText: 'email@domain@domain.com',
    correctText: 'email@domain.com',
    ...INPUT_COMMON_PROPS.email,
  },
  {
    label: 'Name',
    incorrectText: 'Test1234',
    correctText: 'Test',
    ...INPUT_COMMON_PROPS.name,
  },
  {
    label: 'New password',
    incorrectText: 'Test234',
    correctText: 'Test12345!',
    ...INPUT_COMMON_PROPS.newPassword,
  },
] as CustomInputTestObj[];

describe('CustomInput', () => {
  let customInputTest = (props: CustomInputTestObj) => {
    it(`${props.label} incorrect should match the snapshot`, () => {
      const tree = renderer.create(
        <CustomThemeProvider>
          <CustomInput {...props} value={props.incorrectText} />
        </CustomThemeProvider>,
      );
      expect(tree).toMatchSnapshot();
    });

    it(`${props.label} correct should match the snapshot`, () => {
      const tree = renderer.create(
        <CustomThemeProvider>
          <CustomInput {...props} value={props.correctText} />
        </CustomThemeProvider>,
      );
      expect(tree).toMatchSnapshot();
    });
  };

  customInputTests.forEach(input => {
    customInputTest(input);
  });
});
