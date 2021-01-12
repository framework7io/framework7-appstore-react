/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useRef } from 'react';
import $ from 'dom7';

import {
  f7,
  App,
  Views,
  View,
  Toolbar,
  Link,
} from 'framework7-react';

import PWA from '../js/pwa';
import routes from '../js/routes';

const AppComponent = () => {
  const [activeTab, setActiveTab] = useState('today');
  const previousTab = useRef(null);

  useEffect(() => {
    previousTab.current = activeTab;
  }, [activeTab]);

  useEffect(() => {
    // Fix viewport scale on mobiles
    if ((f7.device.ios || f7.device.android) && f7.device.standalone) {
      const viewPortContent = document.querySelector('meta[name="viewport"]').getAttribute('content');
      document.querySelector('meta[name="viewport"]').setAttribute('content', `${viewPortContent}, maximum-scale=1, user-scalable=no`);
    }
  }, []);

  // Framework7 Parameters
  const f7params = {
    name: 'App Store',
    theme: 'ios',
    routes,
    autoDarkTheme: true,
  };
  if (process.env.NODE_ENV === 'production') {
    // Register service worker in production mode only
    PWA.init();
  }

  function onTabLinkClick(tab) {
    if (previousTab.current !== activeTab) return;
    if (activeTab === tab) {
      $(`#view-${tab}`)[0].f7View.router.back();
    }
  }
  return (
    <App {...f7params}>

      <Views tabs className="safe-areas">
        <Toolbar tabbar labels bottom>
          <Link
            onClick={() => onTabLinkClick('today')}
            tabLink="#view-today"
            tabLinkActive
            iconF7="today"
            text="Today"
          />
          <Link
            onClick={() => onTabLinkClick('games')}
            tabLink="#view-games"
            iconF7="rocket_fill"
            text="Games"
          />
          <Link
            onClick={() => onTabLinkClick('apps')}
            tabLink="#view-apps"
            iconF7="layers_alt_fill"
            text="Apps"
          />
          <Link
            onClick={() => onTabLinkClick('arcade')}
            tabLink="#view-arcade"
            iconF7="gamecontroller_alt_fill"
            text="Arcade"
          />
          <Link
            onClick={() => onTabLinkClick('search')}
            tabLink="#view-search"
            iconF7="search"
            text="Search"
          />
        </Toolbar>

        <View id="view-today" onTabShow={() => setActiveTab('today')} main tab tabActive url="/today/" />
        <View id="view-games" onTabShow={() => setActiveTab('games')} tab url="/games/" />
        <View id="view-apps" onTabShow={() => setActiveTab('apps')} tab url="/apps/" />
        <View id="view-arcade" onTabShow={() => setActiveTab('arcade')} tab url="/arcade/" />
        <View id="view-search" onTabShow={() => setActiveTab('search')} tab url="/search/" />

      </Views>
    </App>
  );
};

export default AppComponent;
