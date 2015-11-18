import {addSubreddit, removeSubreddit, clearAllSubreddits} from './../actions/dashboard.actions';
import {ADD_SUBREDDIT, REMOVE_SUBREDDIT, CLEAR_SUBREDDITS} from './../constants/dashboard.constants';
import {fromJS} from 'immutable';
import {createReducer} from '../utils';

const INITIAL_STATE = fromJS({
  isFetching: false,
  subreddits: {}
});

export default createReducer(INITIAL_STATE, {
  [ADD_SUBREDDIT] : (state, action) => addSubreddit(state, action.subreddit),
  [REMOVE_SUBREDDIT] : (state, action) => removeSubreddit(state, action.subreddit),
  [CLEAR_SUBREDDITS] : (state) => clearAllSubreddits(state)
});
