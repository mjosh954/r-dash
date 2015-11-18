
import 'isomorphic-fetch';
import { arrayOf, normalize } from 'normalizr';
import { postsSchema } from './../constants/schemas';

function getSubredditData (name) {
  // fetch the json data from reddit
  fetch.get('http://www.reddit.com/r/' + name)
  .then(res => res.json())
  .then(({ children }) => {
    console.log(children);
    const posts = children.map(post => {
      return Object.assign(post.post, {
        title: post.title,
        url: post.url
      });
    });
    console.log(postsSchema);
    const normalized = normalize(posts, arrayOf(postsSchema));
    console.log(normalized);
    return normalized;
  });
}


function addSubreddit (state, subreddit) {
  // fetch the json
  if (!subreddit) {
    return state.set('errorMessage', 'Missing subreddit value');
  }

  const data = getSubredditData(subreddit);
  return state.subreddits.set(subreddit, data);
}


function removeSubreddit (state, subreddit) {
  // remove
  if (state.subreddits) {
    return state.subreddits[subreddit] ? state.subreddits.delete(subreddit) : state;
  }
  return state;
}

function clearAllSubreddits (state) {
  // clear tree
  return state;
}

export default {
  clearAllSubreddits,
  removeSubreddit,
  addSubreddit
};
