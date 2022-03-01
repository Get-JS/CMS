import { capitalize } from 'lodash-es';
import { BrowserRouter, Link } from 'react-router-dom';
import { theme } from 'twin.macro';

import { AutoRenewIcon, SearchIcon } from '../Svg';
import { size, variant } from './@types';
import Button from './Button';
import IconButton from './IconButton';

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
                <Button tw="mr-[10px]" key={size} variant={variant} size={size} isRound>
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
        <Button as="a" href="https://www.naver.com" tw="mr-[10px]" external disabled>
          Disabled
        </Button>
        <Button as="a" href="https://www.naver.com" variant="secondary" external disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
};

export const Variants = () => {
  return (
    <div>
      <div tw="mb-[10px]">
        <BrowserRouter>
          <Button as={Link} to="/" variant="secondary" isRound>
            As an React Router link
          </Button>
        </BrowserRouter>
      </div>
      <div tw="flex mb-[10px] gap-[10px]">
        <Button tw="w-full" variant="primary" isRound startIcon={<SearchIcon color={theme`colors.white`} />}>
          Full size
        </Button>
      </div>
      <div tw="flex mb-[10px] gap-[10px]">
        <Button variant="primary" isLoading isRound startIcon={<AutoRenewIcon color={theme`colors.white`} spin />}>
          Search
        </Button>
        <Button variant="primary" isLoading isRound startIcon={<SearchIcon color={theme`colors.white`} />}>
          Search
        </Button>
      </div>
      <div tw="flex mb-[10px] gap-[10px]">
        <IconButton variant="primary" size="md" isRound>
          <SearchIcon color={theme`colors.white`} />
        </IconButton>
        <IconButton variant="secondary" size="md" isRound>
          <SearchIcon />
        </IconButton>
      </div>
      <div tw="flex mb-[10px] gap-[10px]">
        <IconButton variant="primary" size="sm" isRound>
          <SearchIcon color={theme`colors.white`} />
        </IconButton>
        <IconButton variant="secondary" size="sm" isRound>
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};
