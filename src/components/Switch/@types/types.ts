import { ComponentProps, CSSProperties, ElementType, ReactNode } from 'react';

import { Switch } from '@headlessui/react';

import { PolymorphicComponentProps } from '@/typings/utils';

export const size = {
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;

export type Size = typeof size[keyof typeof size];

export type BaseSwitchProps = ComponentProps<typeof Switch> & {
  as?: 'div' | 'button' | ElementType;
  description?: string;
  className?: string;
  style?: CSSProperties;
  size?: Size;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export type SwitchProps<E extends ElementType = 'button'> = PolymorphicComponentProps<E, BaseSwitchProps>;
