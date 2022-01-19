import { FC } from 'react';

import { useRoutes } from 'react-router-dom';
import { SWRConfig } from 'swr';

import routeInfo from '../config/router';

const AuthCheck: FC = ({ children }) => {
  return <>{children}</>;
};

const App = () => {
  const RouteElement = useRoutes(routeInfo);

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
