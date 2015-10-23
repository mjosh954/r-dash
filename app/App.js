import React from 'react';
import ReactDom from 'react-dom';
import DashboardContainer from './components/DashboardContainer';

export default class App extends React.Component {
  
  render() {
    return <DashboardContainer />;

  }
}

ReactDom.render(<App />, document.getElementById('app'));
