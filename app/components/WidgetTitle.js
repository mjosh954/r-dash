import React, {Component} from 'react';

export default class Widget extends Component {

  render() {

    return (
      <li className='list-group-item'>
        <h4>{this.props.title}</h4>
      </li>
    );
  }
}
