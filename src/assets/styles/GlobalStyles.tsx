import { Global, css } from '@emotion/react';
import { GlobalStyles as BaseStyles, theme } from 'twin.macro';

const customStyles = css([
  {
    body: {
      fontFamily:
        'Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, sans-serif',
      backgroundColor: theme`colors.primary`,
      color: theme`textColor.primary`,
      fontSize: 11,
      lineHeight: 1.4,
      fontWeight: 500,
      overflowX: 'hidden',
      marginBottom: 72,
    },
  },
  {
    ...css`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        font-weight: 400;
        line-height: 1;
      }

      h1 {
        font-size: 30px;
      }

      h2 {
        font-size: 24px;
      }
    `,
  },
]);

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
