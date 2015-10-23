import React, {Component} from 'react';
import AddSubreddit from './AddSubreddit';
import Dashboard from './Dashboard';
import _ from 'lodash';

export default class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addSubredditText: '',
      subreddits: [],
      invalidSubreddit: false
    }

    this.getSubreddit = this.getSubreddit.bind(this);
    this.handleRemoveSubreddit = this.handleRemoveSubreddit.bind(this);
  }



  handleAddSubreddit() {
    this.setState({invalidSubreddit: false})
    var subreddit = this.state.addSubredditText;

    if(subreddit && subreddit.length > 0) {
      var subreddits = this.state.subreddits;
      if(_.findIndex(subreddits, sr => sr.title === subreddit) > -1)
        this.setState({invalidSubreddit: true })

      this.getSubreddit(subreddit)
      .then((result) => {
        console.log(result);
        if(result.data.after !== null){
          subreddits.push({
            title: subreddit,
            key: result.data.after,
            data: result.data
          });

          this.setState({
            addSubredditText: '',
            subreddits
          });
        } else {
          this.setState({invalidSubreddit: true});
        }



      }).catch((err) => {
        this.setState({invalidSubreddit: true})
      });
    }
  }

  handleRemoveSubreddit(e) {
    console.log(e);
    var subreddits = this.state.subreddits;
  }

  getSubreddit(subreddit) {

    return fetch('http://www.reddit.com/r/' + subreddit + '.json')
      .then((response) => {
      return response.json();
    })
  }

  handleSubredditTextChange(event) {
    this.setState({addSubredditText: event.target.value})
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h3>R-Dash</h3>
          <AddSubreddit onAddSubreddit={this.handleAddSubreddit.bind(this)}
            subredditValue={this.state.addSubredditText}
            subredditTextChange={this.handleSubredditTextChange.bind(this)}
            showInvalidSubreddit={this.state.invalidSubreddit} />
        </div>
        <Dashboard subreddits={this.state.subreddits}
          removeSubreddit={this.handleRemoveSubreddit} />
      </div>
    )
  }
}
