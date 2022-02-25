import React, { cloneElement, ElementType, isValidElement } from 'react';

import { ButtonProps } from '../@types';
import { StyledButton } from './styles';

const Button = <E extends ElementType = 'button'>({
  startIcon,
  endIcon,
  className,
  isLoading,
  disabled,
  children,
  ...rest
}: ButtonProps<E>) => {
  const isDisabled = isLoading || disabled;

  return (
    <StyledButton className={className} isLoading={isLoading} disabled={isDisabled} {...rest}>
      <>
        {isValidElement(startIcon) && cloneElement(startIcon)}
        {children}
        {isValidElement(endIcon) && cloneElement(endIcon)}
      </>
    </StyledButton>
  );
};

export default Button;
