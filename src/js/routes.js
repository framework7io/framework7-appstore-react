const routes = [
  {
    path: '/today/',
    asyncComponent: () => import(/* webpackChunkName: "today" */ '../pages/Today'),
  },
  {
    path: '/games/',
    asyncComponent: () => import(/* webpackChunkName: "games" */ '../pages/Games'),
  },
  {
    path: '/apps/',
    asyncComponent: () => import(/* webpackChunkName: "apps" */ '../pages/Apps'),
  },
  {
    path: '/arcade/',
    asyncComponent: () => import(/* webpackChunkName: "arcade" */ '../pages/Arcade'),
  },
  {
    path: '/search/',
    asyncComponent: () => import(/* webpackChunkName: "search" */ '../pages/Search'),
  },
  {
    path: '/app/:id',
    asyncComponent: () => import(/* webpackChunkName: "app-details" */ '../pages/AppDetails'),
  },
  {
    path: '/account/',
    popup: {
      asyncComponent: () => import(/* webpackChunkName: "account" */ '../pages/Account'),
    },
  },
  {
    path: '(.*)',
    asyncComponent: () => import(/* webpackChunkName: "404" */ '../pages/404'),
  },
];

export default routes;
