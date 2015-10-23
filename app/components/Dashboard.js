import React, {Component} from 'react';
import Widget from './Widget';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);


  }

  render() {

    var subreddits = this.props.subreddits || [];
    var widgets = subreddits.map((subreddit) => {
      return (
        <Widget key={subreddit.key}
          subreddit={subreddit}
          removeSubreddit={this.props.removeSubreddit}/>
      );
    });

    return (
      <div className='row'>
        {widgets}
      </div>
    );
  }
}
