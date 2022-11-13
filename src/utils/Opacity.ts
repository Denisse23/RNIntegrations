export const applyOpacityToHex = (color: string, opacity: number) => {
  const decimal = (opacity * 100 * 255) / 100;
  const opacityHex = decimal.toString(16).split('.');
  return `${color}${opacityHex[0]}`;
};
