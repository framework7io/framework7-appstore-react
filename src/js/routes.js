const routes = [
  {
    path: '/today/',
    asyncComponent: () => import('../pages/Today'),
  },
  {
    path: '/games/',
    asyncComponent: () => import('../pages/Games'),
  },
  {
    path: '/apps/',
    asyncComponent: () => import('../pages/Apps'),
  },
  {
    path: '/arcade/',
    asyncComponent: () => import('../pages/Arcade'),
  },
  {
    path: '/search/',
    asyncComponent: () => import('../pages/Search'),
  },
  {
    path: '/app/:id',
    asyncComponent: () => import('../pages/AppDetails'),
  },
  {
    path: '(.*)',
    asyncComponent: () => import('../pages/404'),
  },
];

export default routes;
