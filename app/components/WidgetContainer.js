import React, {Component} from 'react';

export default class WidgetContainer extends Component {
  render() {
    return (

        <div className="col s12 m6 l4">
          <div className="card-panel blue-grey darken-1">
            {this.props.children}
          </div>
        </div>
    )
  }
}
