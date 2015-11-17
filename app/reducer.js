import {addSubreddit, removeSubreddit, clearAllSubreddits} from './core';
import {fromJS} from 'immutable';

export const INITIAL_STATE = fromJS({
  subreddits: {}
});

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_SUBREDDIT':
    return addSubreddit(state, action.subreddit);
  case 'REMOVE_SUBREDDIT':
    return removeSubreddit(state, action.subreddit);
  case 'CLEAR_SUBREDDITS':
    return clearAllSubreddits(state);
  default:
    return state;
  }

  return state;
}
