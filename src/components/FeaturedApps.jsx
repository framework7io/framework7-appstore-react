import React from 'react';

import './FeaturedApps.less';

const FeaturedApps = ({ apps, useIcon }) => {
  return (
    <div className="block featured-apps">
      {apps.map((app) => (
        <div className="featured-app" key={app.id}>
          <a href={`/app/${app.id}`}>
            <div className="featured-app-headline">{app.featured}</div>
            <div className="featured-app-title">{app.title}</div>
            <div className="featured-app-subtitle">{app.subtitle}</div>
            <div className="featured-app-image" style={{ backgroundImage: `url(${useIcon ? app.icon : app.screenshots[0]})` }} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeaturedApps;
