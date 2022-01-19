import { route } from 'route-type-safe';

export const routes = {
  HOME: route({ path: '/' }),
  ISSUE: route({ path: '/issue' }),
  LIKE: route({ path: '/like' }),
  MORE: route({ path: '/more' }),
};
