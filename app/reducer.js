import {addSubreddit, removeSubreddit, clearAllSubreddits} from './core';



export default function reducer(state, action){

  switch(action.type) {
    case 'ADD_SUBREDDIT':
      return addSubreddit(state, action.subreddit);
    case 'REMOVE_SUBREDDIT':
      return removeSubreddit(state, action.subreddit);
    case 'CLEAR_SUBREDDITS':
      return clearAllSubreddits(state);
  }

  return state;
}
