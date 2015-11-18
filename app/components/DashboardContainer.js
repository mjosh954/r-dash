import React, {Component} from 'react';
import AddSubreddit from './AddSubreddit';
import Dashboard from './Dashboard';
import {findIndex} from 'lodash';

export default class DashboardContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      subredditText: '',
      subreddits: [],
      invalidSubreddit: false
    };

    this.getSubreddit = this.getSubreddit.bind(this);
  }

  getSubreddit (subreddit) {
    return fetch('http://www.reddit.com/r/' + subreddit + '.json')
      .then(response => {
        return response.json();
      });
  }

  handleAddSubreddit () {
    this.setState({invalidSubreddit: false});
    const subreddit = this.state.subredditText;

    if (subreddit && subreddit.length > 0) {
      const subreddits = this.state.subreddits;
      if (findIndex(subreddits, sr => sr.title === subreddit) > -1) {
        this.setState({invalidSubreddit: true });
      }

      this.getSubreddit(subreddit)
      .then(({data}) => {
        if (data.after !== null) {
          subreddits.push({
            title: subreddit,
            key: data.after,
            data: data
          });
          this.setState({
            subredditText: '',
            subreddits
          });
        } else {
          this.setState({invalidSubreddit: true});
        }
      }).catch(() => {
        this.setState({invalidSubreddit: true});
      });
    }
  }

  render () {
    const handleRemoveSubreddit = (e) => console.log(e);
    const handleSubredditTextChange = (e) => this.setState({subredditText: e.target.value});

    return (
      <div>
        <div className='container'>
          <h3>R-Dash</h3>
          <AddSubreddit onAddSubreddit={this.handleAddSubreddit.bind(this)}
            subredditValue={this.state.subredditText}
            subredditTextChange={handleSubredditTextChange}
            showInvalidSubreddit={this.state.invalidSubreddit} />
        </div>
        <Dashboard subreddits={this.state.subreddits}
          removeSubreddit={handleRemoveSubreddit} />
      </div>
    );
  }
}
