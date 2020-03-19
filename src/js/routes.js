import Today from '../pages/Today';
import Games from '../pages/Games';
import Apps from '../pages/Apps';
import Arcade from '../pages/Arcade';
import Search from '../pages/Search';

const routes = [
  {
    path: '/today/',
    component: Today,
  },
  {
    path: '/games/',
    component: Games,
  },
  {
    path: '/apps/',
    component: Apps,
  },
  {
    path: '/arcade/',
    component: Arcade,
  },
  {
    path: '/search/',
    component: Search,
  },
  {
    path: '/app/:id',
    asyncComponent: () => import(/* webpackChunkName: "app-details" *//* webpackPreload: true */ '../pages/AppDetails'),
  },
  {
    path: '/account/',
    popup: {
      asyncComponent: () => import(/* webpackChunkName: "account" *//* webpackPreload: true */ '../pages/Account'),
    },
  },
  {
    path: '(.*)',
    asyncComponent: () => import(/* webpackChunkName: "404" */ '../pages/404'),
  },
];

export default routes;
