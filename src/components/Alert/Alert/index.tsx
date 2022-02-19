import { ReactNode } from 'react';

import Button from '@/components/Button';

import { alertHide, alertShow } from '../styles';

export interface IAlertProps {
  className?: string;
  isOpen: boolean;
  isLoading?: boolean;
  description?: string | ReactNode;
  closeText?: string;
  onClose: () => void;
}

const Alert = ({ className, isOpen, isLoading, description, closeText, onClose }: IAlertProps) => {
  return (
    <div
      className={className}
      css={[isOpen ? alertShow : alertHide]}
      tw="min-w-[420px] p-1 bg-white rounded-md shadow-2xl text-center"
    >
      <div tw="flex justify-center items-center p-7 rounded-[20px]">
        <p tw="font-size[20px] font-bold leading-[30px]">{description}</p>
      </div>
      <Button text={closeText} isLoading={isLoading} onClick={onClose} tw="w-[200px]" />
    </div>
  );
};

export default Alert;
