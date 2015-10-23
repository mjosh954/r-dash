import React, {Component} from 'react';

export default class Widget extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='collection-header valign-wrapper'>
        <div style={{paddingRight: '10px'}}>
        <a className='btn-floating btn-small waves-effect waves-light red'
          onClick={this.props.removeSubredditClick(this.props.title)}>
          <i className='material-icons'>remove</i>
        </a>
        </div>
        <h4 className='valign'>{this.props.title}</h4>
      </li>
    );
  }
}
