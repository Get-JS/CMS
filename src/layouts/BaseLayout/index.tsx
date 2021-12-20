import { FC } from 'react';

import Header from '@/components/Header';

const BaseLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BaseLayout;
