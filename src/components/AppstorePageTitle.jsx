import React from 'react';
import { Link } from 'framework7-react';
import avatarSrc from '../assets/avatar.jpeg';

const AppstorePageTitle = ({ title }) => {
  return (
    <div className="appstore-page-title">
      <span>{title}</span>
      <Link href="/account/">
        <img src={avatarSrc} alt="Account" />
      </Link>
    </div>
  );
};

export default AppstorePageTitle;
