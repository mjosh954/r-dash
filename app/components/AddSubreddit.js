import React, { PropTypes, Component } from 'react';

export default class AddSubreddit extends Component {

  static propTypes = {
    subredditValue: PropTypes.string,
    subredditTextChange: PropTypes.func,
    onAddSubreddit: PropTypes.func,
    showInvalidSubreddit: PropTypes.bool
  }

  render () {
    return (
      <div className='form-inline'>
          <div className='input-group input-group-lg'>
            <div className='input-group-addon'><i className='fa fa-reddit-square fa-lg'></i></div>
            <input className='form-control'
              type='text' placeholder='subreddit'
              value={this.props.subredditValue}
              onChange={this.props.subredditTextChange} />
            <span className='input-group-btn'>
              <button className='btn btn-primary btn-lg' onClick={this.props.onAddSubreddit}><i className='fa fa-plus'></i></button>
          </span>
        </div>
        {this.props.showInvalidSubreddit ? <div className='row'><p>Invalid</p></div> : ''}
      </div>
    );
  }
}

export default AddSubreddit;
