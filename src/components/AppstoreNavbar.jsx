import React from 'react';
import { Navbar, Link } from 'framework7-react';
import avatarSrc from '../assets/avatar.jpeg';
import './AppstoreNavbar.less';

const AppstoreNavbar = ({ title }) => {
  return (
    <>
      <Navbar slot="fixed" className="appstore-large-navbar" large transparent title={title} />
      <div className="appstore-page-title">
        <span>{title}</span>
        <Link href="/account/">
          <img src={avatarSrc} alt="Account" />
        </Link>
      </div>
    </>
  );
};

export default AppstoreNavbar;
