import { FC } from 'react';

import * as IconModule from '..';
import { SvgProps } from '../@types';

const Icons = IconModule as unknown as { [key: string]: FC<SvgProps> };

const IconComponent: FC<{ iconName: string } & SvgProps> = ({ iconName, ...props }) => {
  const IconElement = Icons[`${iconName}Icon`];
  return IconElement ? <IconElement {...props} /> : null;
};

export default IconComponent;
