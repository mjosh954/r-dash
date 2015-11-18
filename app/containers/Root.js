import React, { Component, PropTypes } from 'react';
import {Provider} from 'react-redux';
import {createDevToolsWindow } from '../utils';
import DevTools from './DevTools';
import DashboardContainer from './../components/DashboardContainer';

export default class Root extends Component {

  renderDevTools () {
    if (this.props.debug) {
      return null;
    }

    return this.props.debugExternal ?
      createDevToolsWindow(this.props.store) : <DevTools />;
  }


  render () {
    return (
      <div>
        <Provider store={this.props.store}>
          <div>
            {() => <DashboardContainer />}
            {this.renderDevTools()}
          </div>
        </Provider>
      </div>
    );
  }
}

Root.propTypes = {
  store : PropTypes.object.isRequired,
  debug: PropTypes.bool,
  debugExternal: PropTypes.bool
};
