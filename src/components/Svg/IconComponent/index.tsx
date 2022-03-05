import { FC } from 'react';

import { SvgProps } from '../@types';
import * as IconModule from '../Icons';

const Icons = IconModule as unknown as { [key: string]: FC<SvgProps> };

const IconComponent: FC<{ iconName: string } & SvgProps> = ({ iconName, ...props }) => {
  const IconElement = Icons[`${iconName}Icon`];
  return IconElement ? <IconElement {...props} /> : null;
};

export default IconComponent;
