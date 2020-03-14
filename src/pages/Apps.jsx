import React from 'react';

import {
  Block,
  Button,
  Link,
  List,
  ListItem,
} from 'framework7-react';

import { apps } from '../js/data';

import AppstorePage from '../components/AppstorePage';
import FeaturedApps from '../components/FeaturedApps';
import AppsTableList from '../components/AppsTableList';
import AppstoreBlockTitle from '../components/AppstoreBlockTitle';

const Games = () => {
  const featuredApps = apps.filter((app) => !!app.featured);
  const usingNow = apps;
  const popularApps = [...apps]
    .sort((app1, app2) => app2.rating - app1.rating)
    .slice(0, 13)
    .slice(1);
  const newApps = [...apps]
    .sort((app1, app2) => new Date(app2.release_date).getTime() - new Date(app1.release_date).getTime())
    .slice(0, 12);
  const topFreeApps = [...popularApps].reverse();
  const editorsChoice = apps.slice(5);

  return (
    <AppstorePage title="Apps">
      <FeaturedApps backText="Apps" apps={featuredApps} useIcon />

      <AppstoreBlockTitle title="Using Now">
        <Link>See All</Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" apps={usingNow} />

      <AppstoreBlockTitle title="Popular Apps">
        <Link>See All</Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" apps={popularApps} />

      <AppstoreBlockTitle title="New & Updated">
        <Link>See All</Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" apps={newApps} />

      <AppstoreBlockTitle title="Top Free Apps">
        <Link>See All</Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" apps={topFreeApps} />

      <AppstoreBlockTitle title="Top Categories">
        <Link>See All</Link>
      </AppstoreBlockTitle>
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

      <AppstoreBlockTitle title="Editors' Choice">
        <Link>See All</Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" apps={editorsChoice} />

      <AppstoreBlockTitle title="Quick Links">
        <Link>See All</Link>
      </AppstoreBlockTitle>
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
    </AppstorePage>
  );
};

export default Games;
