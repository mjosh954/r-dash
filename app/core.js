import fetch from 'isomorphic-fetch';

function getSubredditData (name) {
  // fetch the json data from reddit
  fetch.get('http://www.reddit.com/r/' + name)
  .then((res) => res.json())
  .then((json) => json.title);

  return {};
}


export function addSubreddit (state, subreddit) {
  // fetch the json
  if (!subreddit) {
    return state.set('errorMessage', 'Missing subreddit value');
  }

  const data = getSubredditData(subreddit);

  return state.subreddits.set(subreddit, data);
}


export function removeSubreddit (state, subreddit) {
  // remove
  if (state.subreddits) {
    return state.subreddits[subreddit] ? state.subreddits.delete(subreddit) : state;
  }
  return state;
}

export function clearAllSubreddits (state) {
  // clear tree
  return state;
}
