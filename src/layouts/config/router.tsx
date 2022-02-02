import loadable from '@loadable/component';

import { routes } from './routes';

const Home = loadable(() => import('@/pages/Home'));
const Issue = loadable(() => import('@/pages/Issue'));

// [page] HOME
export const HOME = {
  path: routes.HOME.path,
  element: <Home />,
};

// [page] ISSUE
export const ISSUE = {
  path: routes.ISSUE.path,
  element: <Issue />,
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
