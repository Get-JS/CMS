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
} as const;

export type Size = typeof size[keyof typeof size];
export type Variant = typeof variant[keyof typeof variant];

export interface BaseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  as?: 'a' | 'button' | ElementType;
  className?: string;
  style?: CSSProperties;
  external?: boolean;
  isRound?: boolean;
  isLoading?: boolean;
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export type ButtonProps<E extends ElementType = 'button'> = PolymorphicComponentProps<E, BaseButtonProps>;
