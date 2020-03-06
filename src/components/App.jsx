import React from 'react';

import {
  App,
  Views,
  View,
  Toolbar,
  Link,
} from 'framework7-react';

import routes from '../js/routes';

const AppComponent = () => {
  // Framework7 Parameters
  const f7params = {
    name: 'App Store', // App name
    theme: 'ios', // ios theme
    // App routes
    routes,
    autoDarkTheme: true,
  };
  if (process.env.NODE_ENV === 'production') {
    // Register service worker in production mode only
    // f7params.serviceWorker = {
    //   path: '/service-worker.js',
    // };
  }
  return (
    <App params={f7params}>

      <Views tabs className="safe-areas">
        <Toolbar tabbar labels bottom>
          <Link tabLink="#view-today" tabLinkActive iconF7="today" text="Today" />
          <Link tabLink="#view-games" iconF7="rocket_fill" text="Games" />
          <Link tabLink="#view-apps" iconF7="layers_alt_fill" text="Apps" />
          <Link tabLink="#view-arcade" iconF7="gamecontroller_alt_fill" text="Arcade" />
          <Link tabLink="#view-search" iconF7="search" text="Search" />
        </Toolbar>

        <View id="view-today" main tab tabActive url="/today/" />
        <View id="view-games" tab url="/games/" />
        <View id="view-apps" tab url="/apps/" />
        <View id="view-arcade" tab url="/arcade/" />
        <View id="view-search" tab url="/search/" />

      </Views>
    </App>
  );
};

export default AppComponent;
