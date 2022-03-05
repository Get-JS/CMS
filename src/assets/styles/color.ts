export const color = {
  primary: '#485861',
  secondary: '#394952',
  tertiary: '#EFF4F5',
  disabled: '#E9EAEB',
};

export const text = {
  primary: '#ffe6cf',
  secondary: '#485861',
  disabled: '#BDC2C4',
};

export const shadow = {
  success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
  warning: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
  focus: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
};

export const base = {
  '--primary': color.primary,
  '--secondary': color.secondary,
  '--tertiary': color.tertiary,
  '--disabled': color.disabled,
  '--text-primary': text.primary,
  '--text-secondary': text.secondary,
  '--text-disabled': text.disabled,
  '--shadow-success': shadow.success,
  '--shadow-warning': shadow.warning,
  '--shadow-focus': shadow.focus,
};

export const light = {};

export const dark = {};

export const colorClassName = {
  base: ':root',
  light: 'theme-light',
  dark: 'theme-dark',
};

export const colorStyle = {
  [colorClassName.base]: base,
  [`.${colorClassName.light}`]: light,
  [`.${colorClassName.dark}`]: dark,
};
