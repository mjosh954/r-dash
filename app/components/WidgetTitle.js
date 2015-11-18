import React, { PropTypes, Component } from 'react';

class Widget extends Component {

  static propTypes = {
    title: PropTypes.string
  }

  render () {
    return (
      <li className='list-group-item'>
        <h4>{this.props.title}</h4>
      </li>
    );
  }
}

export default Widget;
