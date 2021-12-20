import loadable from '@loadable/component';

// [redirect] HOME
export const HOME = {
  default: {
    path: '/',
    redirect: '/login',
    url: () => {
      return `${HOME.default.path}`;
    },
  },
};

// [program] LOGIN
export const LOGIN = {
  default: {
    path: '/login',
    element: loadable(() => import('@/pages/Login')),
    url: () => {
      return `${LOGIN.default.path}`;
    },
  },
};
