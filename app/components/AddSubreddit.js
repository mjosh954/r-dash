import React, {Component} from 'react';

export default class AddSubreddit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.onAddSubreddit}>
        <div className='row'>
          <div className='input-field col s11'>
            <input type='text'
              placeholder='subreddit'
              value={this.props.subredditValue}
              onChange={this.props.subredditTextChange} />
          </div>
          <div className='col s1'>
          <a className='btn-floating btn-large waves-effect waves-light red'><i className='material-icons'>add</i></a>
          </div>
        </div>
        {this.props.showInvalidSubreddit ? <div className='row'><p>Invalid</p></div> : ''}
      </form>
    );
  }
}
