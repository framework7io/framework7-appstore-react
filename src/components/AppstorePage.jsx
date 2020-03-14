import React from 'react';
import { Page, Navbar, Link } from 'framework7-react';
import avatarSrc from '../assets/avatar.jpeg';
import './AppstorePage.less';

const AppstorePage = ({ title, children }) => {
  return (
    <Page className="appstore-page">
      <Navbar className="appstore-page-large-navbar" large transparent title={title} />
      <div className="appstore-page-title">
        <span>{title}</span>
        <Link href="/account/">
          <img src={avatarSrc} alt="Account" />
        </Link>
      </div>
      {children}
    </Page>
  );
};

export default AppstorePage;
