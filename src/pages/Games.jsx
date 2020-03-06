import React from 'react';

import {
  Page,
  Navbar,
  Block,
  BlockTitle,
  Button,
  Link,
  List,
  ListItem,
} from 'framework7-react';

import { games, apps } from '../js/data';

import AppsTableList from '../components/AppsTableList';

const Games = () => {
  const playingNow = games;
  const popular = games.sort((app1, app2) => app2.rating - app1.rating).slice(0, 12);
  const newGames = games.sort((app1, app2) => new Date(app2.release_date).getTime() - new Date(app1.release_date).getTime()).slice(0, 12);
  const topFree = [...popular];
  const editorsChoice = games.slice(10);
  
  return (
    <Page>
      <Navbar large largeTransparent title="Games" />
      <Block className="top-slider">
        {games.filter((app) => !!app.featured).map((app) => (
          <div className="top-slide" key={app.id}>
            <a href={`/app/${app.id}`}>
              <div className="top-slide-headline">{app.featured}</div>
              <div className="top-slide-title">{app.title}</div>
              <div className="top-slide-subtitle">{app.subtitle}</div>
              <div className="top-slide-image" style={{ backgroundImage: `url(${app.screenshots[0]})` }} />
            </a>
          </div>
        ))}
      </Block>

      <BlockTitle className="apps-block-title">
        <span>What We're Playing Now</span>
        <Link>See All</Link>
      </BlockTitle>
      <AppsTableList apps={playingNow} />

      <BlockTitle className="apps-block-title">
        <span>Popular Games</span>
        <Link>See All</Link>
      </BlockTitle>
      <AppsTableList apps={popular} />

      <BlockTitle className="apps-block-title">
        <span>New Games We Love</span>
        <Link>See All</Link>
      </BlockTitle>
      <AppsTableList apps={newGames} />

      <BlockTitle className="apps-block-title">
        <span>Top Free Games</span>
        <Link>See All</Link>
      </BlockTitle>
      <AppsTableList apps={topFree} />

      <BlockTitle className="apps-block-title">
        <span>Top Categories</span>
        <Link>See All</Link>
      </BlockTitle>
      <List className="categories-list" noChevron noHairlines>
        <ListItem
          title="Indie"
          link="#"
        >
          <span role="img" slot="media" aria-label="Indie">💎</span>
        </ListItem>
        <ListItem
          title="Casual"
          link="#"
        >
          <span role="img" slot="media" aria-label="Casual">👾</span>
        </ListItem>
        <ListItem
          title="Strategy"
          link="#"
        >
          <span role="img" slot="media" aria-label="Strategy">🏰</span>
        </ListItem>
        <ListItem
          title="Action"
          link="#"
        >
          <span role="img" slot="media" aria-label="Action">⚔️</span>
        </ListItem>
        <ListItem
          title="Racing"
          link="#"
        >
          <span role="img" slot="media" aria-label="Racing">🏁</span>
        </ListItem>
      </List>

      <BlockTitle className="apps-block-title">
        <span>Editors' Choice</span>
        <Link>See All</Link>
      </BlockTitle>
      <AppsTableList apps={editorsChoice} />

      <BlockTitle className="apps-block-title">
        <span>Quick Links</span>
        <Link>See All</Link>
      </BlockTitle>
      <List className="quick-links-list" noChevron noHairlines>
        <ListItem
          title="Try Apple Arcade"
          link="#"
        />
        <ListItem
          title="About In-App Purchases"
          link="#"
        />
        <ListItem
          title="Parents' Guide to the App Store"
          link="#"
        />
        <ListItem
          title="About Apps & Games for You"
          link="#"
        />
        <ListItem
          title="About Personalisation"
          link="#"
        />
      </List>

      <Block className="buttons-list">
        <Button large>Redeem</Button>
        <Button large>Send Gift</Button>
        <Button large>Add Funds to Apple ID</Button>
      </Block>
    </Page>
  );
};

export default Games;
