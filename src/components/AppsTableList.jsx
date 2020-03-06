import React from 'react';
import { List, ListItem, Button } from 'framework7-react';

import './AppsTableList.less';

const AppsTableList = ({ apps }) => {
  return (
    <List className="apps-table-list" noChevron noHairlines>
      {apps.map((app) => (
        <ListItem
          link={`/app/${app.id}`}
          key={app.id}
        >
          <div className="apps-table-list-title" slot="title">{app.title}</div>
          <div className="apps-table-list-subtitle item-text" slot="title">{app.subtitle}</div>
          <div className="apps-table-list-image" slot="media" style={{ backgroundImage: `url(${app.icon})` }} />
          <div className="apps-table-list-button" slot="inner">
            <Button className="prevent-active-state-propagation" type="button" round>Get</Button>
            <span>In-App Purchases</span>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default AppsTableList;
