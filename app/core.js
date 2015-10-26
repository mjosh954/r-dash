import {Map, fromJS} from 'immutable';

export const INITIAL_STATE = Map();

function getSubredditData(name) {
  // fetch the json data from reddit
  throw new Error('NotImplementedException');
  return {};
}


export function addSubreddit(state, subreddit) {
  //fetch the json
  var nextState = state.errorMessage ? state.delete('errorMessage') : state;

  if(!subreddit){
    return state.set('errorMessage', "Missing subreddit value")
  }

  var data = getSubredditData(subreddit);

  return state.subreddits.set(subreddit, data);
}


export function removeSubreddit(state, subreddit) {
  // remove
  if(state.subreddits){
    return state.subreddits[subreddit]
    ? state.subreddits.delete(subreddit)
    : state;
  }

  return state;
}

export function clearAllSubreddits(state) {
  // clear tree
 throw new Error('Not Implemented');
  return state;
}
