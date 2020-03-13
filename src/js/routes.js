
import Today from '../pages/Today';
import Games from '../pages/Games';
import Apps from '../pages/Apps';
import Arcade from '../pages/Arcade';
import Search from '../pages/Search';
import NotFound from '../pages/404';

import AppDetails from '../pages/AppDetails';

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
    component: AppDetails,
  },
  {
    path: '(.*)',
    component: NotFound,
  },
];

export default routes;
