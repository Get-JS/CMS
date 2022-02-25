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
      <Button tw="mr-[10px]" disabled>
        Disabled
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
    </div>
  );
};
