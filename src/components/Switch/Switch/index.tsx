import { cloneElement, ElementType, isValidElement } from 'react';

import { Switch as HSwitch } from '@headlessui/react';
import tw, { theme } from 'twin.macro';

import { SwitchProps } from '../@types';
import { activeRingStyle, disabledStyle, sizeVariant, switchClassName } from './styles';

const Switch = <E extends ElementType = 'button'>({
  checked,
  onChange,
  size = 'md',
  description,
  startIcon,
  endIcon,
  ...reset
}: SwitchProps<E>) => {
  return (
    <HSwitch
      checked={checked}
      onChange={onChange}
      css={[
        checked ? tw`bg-primary` : tw`bg-tertiary`,
        tw`relative inline-flex flex-shrink-0 
        border-2 border-transparent 
        rounded-full cursor-pointer 
        transition-colors ease-in-out duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`,
        activeRingStyle,
        disabledStyle,
        sizeVariant[size].switch,
      ]}
      {...reset}
    >
      {(startIcon || endIcon) && (
        <div tw="absolute w-full h-full flex justify-center items-center gap-1">
          {isValidElement(startIcon) && cloneElement(startIcon, { css: [sizeVariant[size].icon] })}
          {isValidElement(endIcon) && cloneElement(endIcon, { css: [sizeVariant[size].icon] })}
        </div>
      )}

      <span tw="sr-only">{description}</span>
      <span
        aria-hidden="true"
        className={switchClassName.handle}
        css={[
          checked ? sizeVariant[size].checked : tw`translate-x-0`,
          tw`rounded-full bg-white ring-0 transform transition ease-in duration-200
          inline-flex items-center justify-center
          `,
          sizeVariant[size].handle,
        ]}
      >
        {checked
          ? isValidElement(endIcon) &&
            cloneElement(endIcon, { css: [sizeVariant[size].icon], color: theme`colors.primary` })
          : isValidElement(startIcon) && cloneElement(startIcon, { css: [sizeVariant[size].icon] })}
      </span>
    </HSwitch>
  );
};

Switch.Group = HSwitch.Group;
Switch.Label = HSwitch.Label;
Switch.Description = HSwitch.Description;

export default Switch;
