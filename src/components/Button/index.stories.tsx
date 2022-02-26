import { capitalize } from 'lodash-es';

import { size, variant } from './@types';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
};

export const Default = () => {
  return (
    <div>
      {Object.values(variant).map((variant) => {
        return (
          <div tw="mb-[10px]" key={variant}>
            {Object.values(size).map((size) => {
              return (
                <Button tw="mr-[10px]" key={size} variant={variant} size={size}>
                  {`${capitalize(variant)} ${size.toUpperCase()}`}
                </Button>
              );
            })}
          </div>
        );
      })}
      <div tw="mb-[10px]">
        <Button tw="mr-[10px]" disabled isRound>
          Disabled
        </Button>
        <Button variant="secondary" disabled isRound>
          Disabled
        </Button>
      </div>
    </div>
  );
};

export const Anchors = () => {
  return (
    <div>
      {Object.values(variant).map((variant) => {
        return (
          <div key={variant} tw="mb-[10px]">
            {Object.values(size).map((size) => {
              return (
                <Button
                  as="a"
                  tw="mr-[10px]"
                  href="https://www.naver.com"
                  key={size}
                  variant={variant}
                  size={size}
                  external
                >
                  {`${capitalize(variant)} anchor ${size.toUpperCase()}`}
                </Button>
              );
            })}
          </div>
        );
      })}
      <div tw="mb-[10px]">
        <Button as="a" href="https://www.naver.com" tw="mr-[10px]" external disabled isRound>
          Disabled
        </Button>
        <Button as="a" href="https://www.naver.com" variant="secondary" external disabled isRound>
          Disabled
        </Button>
      </div>
    </div>
  );
};
