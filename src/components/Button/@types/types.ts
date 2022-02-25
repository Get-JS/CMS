import { ButtonHTMLAttributes, CSSProperties, ElementType, ReactNode } from 'react';

import { PolymorphicComponentProps } from '@/typings/utils';

export const size = {
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;

export const variant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  TEXT: 'text',
  DANGER: 'danger',
  SUBTLE: 'subtle',
  SUCCESS: 'success',
} as const;

export type Size = typeof size[keyof typeof size];
export type Variant = typeof variant[keyof typeof variant];

export interface BaseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  as?: 'a' | 'button' | ElementType;
  className?: string;
  style?: CSSProperties;
  isRound?: boolean;
  isLoading?: boolean;
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export type ButtonProps<P extends ElementType = 'button'> = PolymorphicComponentProps<P, BaseButtonProps>;
