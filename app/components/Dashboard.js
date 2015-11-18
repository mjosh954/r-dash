import React, {PropTypes, Component} from 'react';
import Widget from './Widget';

export default class Dashboard extends Component {

  render () {
    const subreddits = this.props.subreddits || [];

    const widgets = subreddits.map((subreddit) => {
      return (
        <Widget key={subreddit.key}
          subreddit={subreddit}
          removeSubreddit={this.props.removeSubreddit}/>
      );
    });

    return (
      <div className='container-fluid'>
        {widgets}
      </div>
    );
  }
}

Dashboard.propTypes = {
  subreddits: PropTypes.array,
  removeSubreddit: PropTypes.func
};

export default Dashboard;
