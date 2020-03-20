/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import AppstorePage from '../components/AppstorePage';
import AppstorePageTitle from '../components/AppstorePageTitle';
import AppstoreCard from '../components/AppstoreCard';
import './Today.less';

import arcadeCardImage from '../assets/arcade.jpg';

import { apps, games } from '../js/data';

const Today = () => {
  const todayDate = new Date();
  const todayDateTitle = 'Today';
  const todayDateHeading = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', weekday: 'long' }).format(todayDate);
  const yesterdayDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  const yesterdayDateTitle = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(yesterdayDate);
  const yesterdayDateHeading = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long' }).format(yesterdayDate);

  const appCrossyRoad = games.find((app) => app.title === 'Crossy Road');
  const appNetlfix = apps.find((app) => app.title === 'Netflix');
  const appInstagram = apps.find((app) => app.title === 'Instagram');
  const appSevenSins = games.find((app) => app.title === 'The Seven Deadly Sins');

  return (
    <AppstorePage noCollapsedNavbar>
      <AppstorePageTitle title={todayDateTitle} heading={todayDateHeading} accountLink />
      <div className="appstore-card-grid">
        <AppstoreCard
          image={arcadeCardImage}
          title="5 awesome Apple Arcade puzzle games"
          titleColor="#000"
          titlePosition="top"
          subtitle="Apple Arcade"
          subtitleColor="#000"
          closeButtonColor="#000"
        >
          <p><b>Lorem ipsum dolor sit amet</b> consectetur adipisicing elit. Repellendus unde quam voluptate iure. Harum accusamus, porro tempora recusandae debitis culpa, ducimus numquam aliquam provident sunt unde totam exercitationem iure enim.</p>
          <p>Explicabo reprehenderit maxime hic natus perspiciatis quae pariatur porro obcaecati numquam velit exercitationem iste voluptatibus tenetur ipsa deleniti dolor reiciendis amet vitae, consectetur deserunt! Vitae sequi adipisci earum. Assumenda, dolorem?</p>
          <h3>Ratione eos perspiciatis</h3>
          <p>Obcaecati, libero corrupti! Modi asperiores debitis eius, culpa, quisquam laudantium fugit ex quia, dolores repellendus sapiente! Dolor non doloremque ea perspiciatis unde excepturi deleniti. Ratione eos perspiciatis vitae exercitationem adipisci.</p>
          <p>Possimus amet, quasi tenetur error nisi dolorum quod, molestiae rerum saepe est asperiores ex itaque rem repellendus deleniti. Doloremque unde explicabo consectetur nobis voluptatem libero molestias est perferendis. Quos, ratione.</p>
          <p>Ipsum maxime molestiae sunt pariatur, molestias corporis aliquam, magni tempore cum explicabo placeat suscipit nulla repellendus quibusdam facilis, ea est reprehenderit libero quasi eligendi rem qui architecto accusamus rerum. At?</p>
        </AppstoreCard>

        <AppstoreCard
          image="static/apps-images/crossy-road-5.jpg"
          title={(<span>GAME<br />OF THE<br />DAY</span>)}
          titleColor="#fff"
          titlePosition="bottom"
          titleLarge
          app={appCrossyRoad}
        >
          <p>Lorem ipsum dolor sit amet <b>consectetur adipisicing elit</b>. Quam corporis minima inventore? Quod unde ex fugiat itaque consequuntur, rem assumenda dolor beatae incidunt facere dolorem nobis repellat expedita sed ea?</p>
          <p>Ducimus, eveniet ea adipisci, impedit repellendus rem doloremque minima incidunt nihil cumque voluptatibus quos laudantium animi quibusdam odio molestias iusto delectus voluptatem! Totam laborum rem numquam temporibus possimus quae iure?</p>
          <h3>Minus at repudiandae</h3>
          <p>Repellendus qui possimus repellat? Voluptas distinctio asperiores impedit enim corporis dolores nulla eius provident dignissimos? Minus at repudiandae consequuntur dolorem magni quibusdam perferendis animi amet tenetur eos iure, id sint.</p>
          <p>Dolore exercitationem consequuntur excepturi? Voluptatem totam adipisci illum voluptate, iste quia, excepturi non culpa, reprehenderit repudiandae labore itaque! Cupiditate, harum laborum mollitia quidem tempora est saepe perspiciatis fugiat quia neque.</p>
        </AppstoreCard>
        <AppstoreCard
          image="static/apps-images/netflix-7.jpg"
          title={(<span>APP<br />OF THE<br />DAY</span>)}
          titleColor="#fff"
          titlePosition="bottom"
          titleLarge
          app={appNetlfix}
        >
          <p>Lorem ipsum, <b>dolor sit amet consectetur adipisicing</b> elit. Explicabo sapiente nisi accusantium earum quos culpa quam doloremque distinctio suscipit nobis corrupti eaque, debitis quasi quisquam rerum quas beatae dolorem eos?</p>
          <p>Magnam obcaecati fugit, ullam nostrum in dolore sed ab culpa ipsum architecto sunt distinctio necessitatibus et. Quam laborum delectus tenetur rem quae itaque ad numquam, eveniet, repudiandae quas eum unde?</p>
          <h3>Enim laboriosam repellat</h3>
          <p>Dignissimos recusandae consectetur adipisci minima vel molestiae laboriosam quisquam libero quos sint, expedita necessitatibus. Asperiores, consectetur! Odio nobis odit placeat quos magni. Enim laboriosam repellat a blanditiis doloremque esse repellendus?</p>
          <p>Commodi, similique tempora, nesciunt voluptatem blanditiis, dignissimos voluptas quidem cupiditate soluta magni dolorem sequi illum accusamus temporibus iste dolorum voluptates illo maxime sit nulla. Ullam, repellendus. Explicabo architecto laborum itaque.</p>
        </AppstoreCard>
      </div>

      <AppstorePageTitle title={yesterdayDateTitle} heading={yesterdayDateHeading} accountLink={false} />
      <div className="appstore-card-grid">
        <AppstoreCard
          image="static/apps-images/the-seven-deadly-sins-8.jpg"
          title={(<span>GAME<br />OF THE<br />DAY</span>)}
          titleColor="#fff"
          titlePosition="bottom"
          titleLarge
          app={appSevenSins}
        >
          <p>Lorem ipsum dolor sit amet <b>consectetur adipisicing elit</b>. Quam corporis minima inventore? Quod unde ex fugiat itaque consequuntur, rem assumenda dolor beatae incidunt facere dolorem nobis repellat expedita sed ea?</p>
          <p>Ducimus, eveniet ea adipisci, impedit repellendus rem doloremque minima incidunt nihil cumque voluptatibus quos laudantium animi quibusdam odio molestias iusto delectus voluptatem! Totam laborum rem numquam temporibus possimus quae iure?</p>
          <h3>Minus at repudiandae</h3>
          <p>Repellendus qui possimus repellat? Voluptas distinctio asperiores impedit enim corporis dolores nulla eius provident dignissimos? Minus at repudiandae consequuntur dolorem magni quibusdam perferendis animi amet tenetur eos iure, id sint.</p>
          <p>Dolore exercitationem consequuntur excepturi? Voluptatem totam adipisci illum voluptate, iste quia, excepturi non culpa, reprehenderit repudiandae labore itaque! Cupiditate, harum laborum mollitia quidem tempora est saepe perspiciatis fugiat quia neque.</p>
        </AppstoreCard>
        <AppstoreCard
          image="static/apps-images/instagram-5.jpg"
          title={(<span>APP<br />OF THE<br />DAY</span>)}
          titleColor="#000"
          titlePosition="bottom"
          titleLarge
          closeButtonColor="#000"
          app={appInstagram}
          appColor="#000"
        >
          <p>Lorem ipsum, <b>dolor sit amet consectetur adipisicing</b> elit. Explicabo sapiente nisi accusantium earum quos culpa quam doloremque distinctio suscipit nobis corrupti eaque, debitis quasi quisquam rerum quas beatae dolorem eos?</p>
          <p>Magnam obcaecati fugit, ullam nostrum in dolore sed ab culpa ipsum architecto sunt distinctio necessitatibus et. Quam laborum delectus tenetur rem quae itaque ad numquam, eveniet, repudiandae quas eum unde?</p>
          <h3>Enim laboriosam repellat</h3>
          <p>Dignissimos recusandae consectetur adipisci minima vel molestiae laboriosam quisquam libero quos sint, expedita necessitatibus. Asperiores, consectetur! Odio nobis odit placeat quos magni. Enim laboriosam repellat a blanditiis doloremque esse repellendus?</p>
          <p>Commodi, similique tempora, nesciunt voluptatem blanditiis, dignissimos voluptas quidem cupiditate soluta magni dolorem sequi illum accusamus temporibus iste dolorum voluptates illo maxime sit nulla. Ullam, repellendus. Explicabo architecto laborum itaque.</p>
        </AppstoreCard>
      </div>
    </AppstorePage>
  );
};

export default Today;
