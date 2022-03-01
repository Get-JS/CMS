import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { colorStyle } from '@assets/styles/color';
import { Global, css } from '@emotion/react';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const cache = createCache({ prepend: true, key: 'twin' });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const customStyles = css([colorStyle]);

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export const decorators = [
  (Story) => (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Story />
    </CacheProvider>
  ),
];
