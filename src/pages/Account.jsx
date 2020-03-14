import React from 'react';
import {
  Popup,
  Page,
  Navbar,
  Link,
  List,
  ListItem,
  ListButton,
} from 'framework7-react';

import './Account.less';
import avatarSrc from '../assets/avatar.jpeg';

const Account = () => {
  return (
    <Popup push swipeToClose="to-bottom" className="account-popup">
      <Page className="account-page">
        <Navbar title="Account">
          <Link popupClose slot="right">Done</Link>
        </Navbar>
        <List mediaList>
          <ListItem
            className="account-user"
            title="Vladimir Kharlampidi"
            subtitle="username@website.com"
            chevronCenter
            link
          >
            <img slot="media" src={avatarSrc} alt="Vladimir Kharlampidi" />
          </ListItem>
        </List>
        <List>
          <ListItem
            title="Purchased"
            link
          />
          <ListItem
            title="Subscriptions"
            link
          />
        </List>
        <List>
          <ListButton>Redeem Gift Card or Code</ListButton>
          <ListButton>Send Gift Card by Email</ListButton>
          <ListButton>Add Funds to Apple ID</ListButton>
        </List>
        <List>
          <ListItem
            title="Personalised Recommendations"
            link
          />
        </List>
      </Page>
    </Popup>
  );
};

export default Account;
