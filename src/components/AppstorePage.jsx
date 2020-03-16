import React from 'react';
import { Page, Navbar, Link } from 'framework7-react';
import avatarSrc from '../assets/avatar.jpeg';
import './AppstorePage.less';

const AppstorePage = ({
  title, navbarHeading, noCollapsedNavbar, children,
}) => {
  return (
    <Page className={`appstore-page ${noCollapsedNavbar ? 'appstore-page-no-collapsed-navbar' : ''}`}>
      <Navbar className={`appstore-page-large-navbar ${noCollapsedNavbar ? 'appstore-page-no-collapsed-navbar' : ''}`} large transparent title={title} />
      <h1 className="appstore-page-title">
        {navbarHeading && (
          <div className="appstore-page-title-heading">{navbarHeading}</div>
        )}
        <span>{title}</span>
        <Link href="/account/">
          <img src={avatarSrc} alt="Account" />
        </Link>
      </h1>
      {children}
    </Page>
  );
};

export default AppstorePage;
