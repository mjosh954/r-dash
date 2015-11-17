import React, { Component } from 'react';
import ReactDom from 'react-dom';
import DashboardContainer from './components/DashboardContainer';
import { Provider } from 'react-redux';

import makeStore from './store';

const store = makeStore();
const MOUNT_NODE = document.getElementById('app');

export default class App extends Component {

  render () {
    return <DashboardContainer />;
  }
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);
