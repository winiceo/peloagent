import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
  path: '/transferTree',
  title: 'DBAdmin - transfer tree page',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
