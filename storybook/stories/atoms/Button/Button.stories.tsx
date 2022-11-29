import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button } from '@components/atoms';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import CustomThemeProvider from '@theme/CustomThemeProvider';
import CenterView from '../../CenterView';

storiesOf('Button', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('primary', () => (
    <CustomThemeProvider>
      <Button
        disabled={boolean('Disabled', false)}
        text={text('Text', 'Primary')}
        onPress={action('onPressButton')}
        type="primary"
      />
    </CustomThemeProvider>
  ))
  .add('secondary', () => (
    <CustomThemeProvider>
      <Button
        disabled={boolean('Disabled', false)}
        text={text('Text', 'Secondary')}
        onPress={action('onPressButton')}
        type="secondary"
      />
    </CustomThemeProvider>
  ))
  .add('primaryText', () => (
    <CustomThemeProvider>
      <Button
        disabled={boolean('Disabled', false)}
        text={text('Text', 'Primary Text')}
        onPress={action('onPressButton')}
        type="primaryText"
      />
    </CustomThemeProvider>
  ))
  .add('secondaryText', () => (
    <CustomThemeProvider>
      <Button
        disabled={boolean('Disabled', false)}
        text={text('Text', 'Secondary Text')}
        onPress={action('onPressButton')}
        type="secondaryText"
      />
    </CustomThemeProvider>
  ));
