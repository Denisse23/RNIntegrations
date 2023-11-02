import React from 'react';
import { CustomInput } from '@components/atoms';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import CustomThemeProvider from '@theme/CustomThemeProvider';
import CenterView from '../../CenterView';

storiesOf('CustomInput', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('normal', () => (
    <CustomThemeProvider>
      <CustomInput label={text('Text', 'Normal')} />
    </CustomThemeProvider>
  ))
  .add('with error', () => (
    <CustomThemeProvider>
      <CustomInput
        label={text('Text', 'With error')}
        error={text('Text', 'Error label.')}
      />
    </CustomThemeProvider>
  ));
