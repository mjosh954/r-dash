import React, { PropTypes, Component } from 'react';

class Widget extends Component {

  render () {
    return (
      <li className='list-group-item'>
        <h4>{this.props.title}</h4>
      </li>
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string
};

export default Widget;
