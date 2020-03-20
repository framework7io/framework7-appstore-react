import React from 'react';
import { Card, CardContent } from 'framework7-react';
import AppsTableList from './AppsTableList';
import './AppstoreCard.less';

const AppstoreCard = ({
  image,
  imageAlt = '',
  title = '',
  titleColor = '#000',
  subtitle = '',
  subtitleColor = '#000',
  titleLarge = false,
  titlePosition = 'top',
  app,
  appColor = '#fff',
  closeButtonColor = '#fff',
  children,
}) => {
  const titleStyle = {
    color: titleColor,
  };
  if (titleLarge) {
    Object.assign(titleStyle, {
      fontSize: '44px',
      fontWeight: 800,
      lineHeight: 1,
    });
  }
  return (
    <Card expandable className="appstore-card">
      <CardContent padding={false}>
        <div className={`appstore-card-header appstore-card-header-text-${titlePosition}`}>
          <img src={image} alt={imageAlt} />
          <div className="appstore-card-header-text">
            <div className="appstore-card-subtitle" style={{ color: subtitleColor }}>{subtitle}</div>
            <div className="appstore-card-title" style={titleStyle}>{title}</div>
          </div>
          {app && (
            <AppsTableList style={{ color: appColor }} apps={[app]} />
          )}
        </div>
        <div className="appstore-card-close-button card-opened-fade-in">
          <a href="#" className="link card-close">
            <i style={{ color: closeButtonColor }} className="f7-icons">multiply_circle_fill</i>
          </a>
        </div>
        <div className="appstore-card-content card-content-padding">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppstoreCard;
