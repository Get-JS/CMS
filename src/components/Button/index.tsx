import { button } from './styles';

export interface IProps {
  className?: string;
  text?: string;
  isLoading?: boolean;
  onClick: () => void;
}

const Button = ({ className, text, onClick, isLoading }: IProps) => {
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      css={button}
      tw="font-size[20px] mx-auto my-5 bg-[#231815]"
    >
      {text}
      {isLoading && '로딩'}
    </button>
  );
};

export default Button;
