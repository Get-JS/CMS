import { OverlayProps } from '../@types';

const Overlay = ({ className = '', onClick }: OverlayProps) => {
  return (
    <div
      role="presentation"
      className={className}
      tw="fixed top-0 left-0 z-overlay w-full h-full bg-[rgba(0,0,0,0.8)]"
      onClick={() => onClick && onClick()}
    />
  );
};

export default Overlay;
