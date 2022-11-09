import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, waitFor } from '@testing-library/react-native';
import Button, { ButtonProps } from './Button';
import CustomThemeProvider from '@theme/CustomThemeProvider';

const buttonTestTypes = [
  {
    type: 'primary',
    text: 'Primary Button',
  },
  {
    type: 'primaryText',
    text: 'Primary Text Button',
  },
  {
    type: 'secondary',
    text: 'Secondary Button',
  },
  {
    type: 'secondaryText',
    text: 'Secondary Text Button',
  },
] as ButtonProps[];

describe('Button', () => {
  buttonTestTypes[0].onPress = jest.fn();

  let testButtonType = (button: ButtonProps) => {
    it(`${button.text} should match the snapshot`, () => {
      const tree = renderer.create(
        <CustomThemeProvider>
          <Button {...button} />
        </CustomThemeProvider>,
      );
      expect(tree).toMatchSnapshot();
    });
  };

  buttonTestTypes.forEach(button => {
    testButtonType(button);
  });

  it('should call on press', async () => {
    const tree = renderer.create(
      <CustomThemeProvider>
        <Button {...buttonTestTypes[0]} />
      </CustomThemeProvider>,
    );

    const button = tree.root.findByProps(buttonTestTypes[0]);

    await waitFor(() => {
      fireEvent.press(button);
    });

    expect(buttonTestTypes[0].onPress).toBeCalledTimes(1);
  });
});
