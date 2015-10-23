import React, {Component} from 'react';

export default class Listing extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return <li className='collection-item'>{this.props.title}</li>
  }
}
