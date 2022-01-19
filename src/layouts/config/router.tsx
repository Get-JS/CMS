import loadable from '@loadable/component';
import { route } from 'route-type-safe';

const Home = loadable(() => import('@/pages/Home'));

export const routes = {
  HOME: route({ path: '/' }),
  ISSUE: route({ path: '/issue' }),
  LIKE: route({ path: '/like' }),
  MORE: route({ path: '/more' }),
};

// [page] HOME
export const HOME = {
  path: routes.HOME.path,
  element: <Home />,
};

// [page] ISSUE
export const ISSUE = {
  path: routes.ISSUE.path,
  element: <Home />,
};

// [page] LIKE
export const LIKE = {
  path: routes.LIKE.path,
  element: <Home />,
};

// [page] MORE
export const MORE = {
  path: routes.MORE.path,
  element: <Home />,
};

const routeInfo = [HOME, ISSUE, LIKE, MORE];

export default routeInfo;
