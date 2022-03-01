import { styled } from 'twin.macro';

import { BaseButtonProps } from '../@types';
import Button from '../Button';

const StyledIconButton = styled(Button)<BaseButtonProps>`
  padding: 0;
  width: ${({ size }) => (size === 'sm' ? '32px' : '48px')};
`;

export default StyledIconButton;
