import IconComponent from './IconComponent';
import Svg from './Svg';

export default {
  title: 'Components/Svg Icons',
  component: Svg,
  argTypes: {},
};

export const Default = () => {
  return (
    <div>
      <Svg viewBox="0 0 18 13">
        <path d="M18,2 L6,2 C4.9,2 4,2.9 4,4 L4,20 C4,21.1 4.9,22 6,22 L18,22 C19.1,22 20,21.1 20,20 L20,4 C20,2.9 19.1,2 18,2 Z M6,4 L11,4 L11,12 L8.5,10.5 L6,12 L6,4 Z" />
      </Svg>
    </div>
  );
};

const context = require.context('./Icons', true, /.tsx$/);
const components = context.keys().reduce((acc, path) => {
  const file = path.substring(2).replace('.tsx', '');
  return {
    ...acc,
    [file]: context(path),
  };
}, {} as any);

export const Icons = () => {
  return (
    <div tw="flex justify-start items-center flex-wrap">
      {Object.keys(components)
        .filter((file) => file !== 'index')
        .map((file) => {
          const Icon = components[file].default;
          return (
            <div key={file} tw="flex flex-col items-center justify-center w-[128px] h-[96px] border[1px solid #eee]">
              <div tw="flex items-center justify-center flex-1 h-full">
                <Icon tw="w-[48px]" />
                <Icon tw="w-[24px] ml-[4px]" color="secondary" />
              </div>
              <div>{file}</div>
            </div>
          );
        })}
    </div>
  );
};

export const IconNameComponent = () => {
  return <IconComponent iconName="Search" />;
};
