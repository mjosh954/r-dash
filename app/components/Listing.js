import React, {Component} from 'react';

export default class Listing extends Component {

  render(){
    return <li className='list-group-item'>{this.props.title}</li>
  }
}
