import React from 'react';
import ReactDom from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore(window.__INITIAL_STATE__);
const MOUNT_NODE = document.getElementById('app');
const debug = true;

ReactDom.render(
  <Root store={store} debug={debug} />,
  MOUNT_NODE
);
