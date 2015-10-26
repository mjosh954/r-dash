import React, {Component} from 'react';

export default class WidgetContainer extends Component {
  render() {

    return (
        <div className="container col-md-4">
          {this.props.children}
        </div>
    )
  }
}
