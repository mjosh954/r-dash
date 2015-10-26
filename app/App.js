import React from 'react';
import ReactDom from 'react-dom';
import DashboardContainer from './components/DashboardContainer';
import {Provider} from 'react-redux';


import makeStore = from './app/store';
export const store = makeStore();

export default class App extends React.Component {

  render() {
    return <DashboardContainer />;

  }
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
