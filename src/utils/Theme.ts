import { ThemeType } from '@theme/Themes';
import { STATES } from '@enums';

export const getStateThemeColor = (theme: ThemeType, state?: STATES) => {
  if (state) {
    return theme.colors[`${state}400`];
  }
  return undefined;
};
