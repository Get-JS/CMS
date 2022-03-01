import { PolymorphicComponent } from '@/typings/utils';

import { BaseButtonProps } from '..';
import StyledIconButton from './styles';

const IconButton: PolymorphicComponent<BaseButtonProps, 'button'> = (props) => {
  return <StyledIconButton aria-label="icon-button" {...props} />;
};

export default IconButton;
