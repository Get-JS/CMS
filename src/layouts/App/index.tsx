/* eslint-disable react/jsx-pascal-case */
import { FC } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { HOME, LOGIN } from '../config/router';

const AuthCheck: FC = ({ children }) => {
  return <>{children}</>;
};

const App = () => {
  const RouteElement = useRoutes([
    { path: HOME.default.path, element: <HOME.default.element /> },
    { path: LOGIN.default.path, element: <LOGIN.default.element /> },
  ]);

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      <AuthCheck>{RouteElement}</AuthCheck>
    </SWRConfig>
  );
};

export default App;
