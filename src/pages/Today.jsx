/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import {
  Card,
  CardContent,
} from 'framework7-react';

import AppstorePage from '../components/AppstorePage';
import AppsTableList from '../components/AppsTableList';
import './Today.less';

import arcadeCardImageSrc from '../assets/arcade.jpg';

import { apps, games } from '../js/data';

const Today = () => {
  const weekDay = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', weekday: 'long' }).format(new Date());

  const gameOfTheDay = games.find((app) => app.title === 'Crossy Road');
  const appOfTheDay = apps.find((app) => app.title === 'Netflix');

  return (
    <AppstorePage title="Today" navbarHeading={weekDay} noCollapsedNavbar>
      <Card expandable className="appstore-card">
        <CardContent padding={false}>
          <div className="appstore-card-header text-top">
            <img src={arcadeCardImageSrc} alt="Apple Arcade" />
            <div className="appstore-card-header-text" style={{ color: '#000' }}>
              <div className="appstore-card-subtitle">Apple Arcade</div>
              <div className="appstore-card-title">5 awesome Apple Arcade puzzle games</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card expandable className="appstore-card">
        <CardContent padding={false}>
          <div className="appstore-card-header text-bottom">
            <img src="static/apps-images/crossy-road-5.jpg" alt="Game of the day" />
            <div className="appstore-card-header-text">
              <div
                className="appstore-card-title"
                style={{
                  fontSize: '44px',
                  color: '#fff',
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                GAME<br />OF THE<br />DAY
              </div>
            </div>
            <AppsTableList apps={[gameOfTheDay]} backText="Today" />
          </div>
        </CardContent>
      </Card>
      <Card expandable className="appstore-card">
        <CardContent padding={false}>
          <div className="appstore-card-header">
            <img src="static/apps-images/netflix-7.jpg" alt="App of the day" />
            <div className="appstore-card-header-text">
              <div
                className="appstore-card-title"
                style={{
                  fontSize: '44px',
                  color: '#fff',
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                APP<br />OF THE<br />DAY
              </div>
            </div>
            <AppsTableList apps={[appOfTheDay]} backText="Today" />
          </div>
        </CardContent>
      </Card>
    </AppstorePage>
  );
};

export default Today;
