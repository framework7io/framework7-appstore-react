import React from 'react';

import './AppstoreBlockTitle.less';

const AppstoreBlockTitle = ({
  title,
  children,
}) => {
  return (
    <div className="block-title appstore-block-title">
      {title && (<span>{title}</span>)}
      {children}
    </div>
  );
};

export default AppstoreBlockTitle;
