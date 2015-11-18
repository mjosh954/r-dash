import React, {PropTypes, Component} from 'react';

class Listing extends Component {

  static propTypes = {
    title: PropTypes.string
  }

  render () {
    return (
      <li className='list-group-item'>{this.props.title}</li>
    );
  }
}

export default Listing;
