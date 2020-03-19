import React from 'react';
import { Page, Navbar } from 'framework7-react';
import AppstorePageTitle from './AppstorePageTitle';
import './AppstorePage.less';

const AppstorePage = ({
  title, navbarHeading, noCollapsedNavbar, children,
}) => {
  return (
    <Page className={`appstore-page ${noCollapsedNavbar ? 'appstore-page-no-collapsed-navbar' : ''}`}>
      <Navbar className={`appstore-page-large-navbar ${noCollapsedNavbar ? 'appstore-page-no-collapsed-navbar' : ''}`} large transparent title={title} />
      {title && (
        <AppstorePageTitle
          title={title}
          heading={navbarHeading}
        />
      )}
      {children}
    </Page>
  );
};

export default AppstorePage;
