import React, {PropTypes, Component} from 'react';

class Listing extends Component {

  render () {
    return (
      <li className='list-group-item'>{this.props.title}</li>
    );
  }
}

Listing.propTypes = {
  title: PropTypes.string
}

export default Listing;
