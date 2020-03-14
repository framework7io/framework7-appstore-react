// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import Framework7React from 'framework7-react';
import Framework7, { Device } from './framework7-custom';

import '../css/framework7-custom.less';
import 'framework7-icons/css/framework7-icons.css';
import '../css/app.less';

import App from '../components/App';

Framework7.use(Framework7React);

// Fix viewport scale on mobiles
if ((Device.ios || Device.android) && Device.standalone) {
  const viewPortContent = document.querySelector('meta[name="viewport"]').getAttribute('content');
  document.querySelector('meta[name="viewport"]').setAttribute('content', `${viewPortContent}, maximum-scale=1, user-scalable=no`);
}

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);
