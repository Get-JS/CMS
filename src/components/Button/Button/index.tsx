import { cloneElement, ElementType, isValidElement } from 'react';

import externalLinkProps from '@/utils/externalLinkProps';

import { ButtonProps } from '../@types';
import { StyledButton } from './styles';

/**
 * Component Generic
 * @see https://ui.toast.com/weekly-pick/ko_20210505
 */

const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>) => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, ...rest } = props;
  const internalProps = external ? externalLinkProps() : {};

  const isDisabled = isLoading || disabled;

  return (
    <StyledButton className={className} isLoading={isLoading} disabled={isDisabled} {...internalProps} {...rest}>
      <>
        {isValidElement(startIcon) && cloneElement(startIcon)}
        {children}
        {isValidElement(endIcon) && cloneElement(endIcon)}
      </>
    </StyledButton>
  );
};

export default Button;
