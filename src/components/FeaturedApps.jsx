import React from 'react';
import { Link } from 'framework7-react';

import './FeaturedApps.less';

const FeaturedApps = ({ apps, useIcon, backText }) => {
  return (
    <div className="block featured-apps">
      {apps.map((app) => (
        <div className="featured-app" key={app.id}>
          <Link noLinkClass href={`/app/${app.id}`} routeProps={{ backText }}>
            <div className="featured-app-headline">{app.featured}</div>
            <div className="featured-app-title">{app.title}</div>
            <div className="featured-app-subtitle">{app.subtitle}</div>
            <img loading="lazy" className="featured-app-image" alt={app.title} src={useIcon ? app.icon : app.screenshots[0]} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeaturedApps;
