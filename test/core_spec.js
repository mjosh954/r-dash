import {expect} from 'chai';
import {Map, fromJS} from 'immutable';
import { clearAllSubreddits, addSubreddit, removeSubreddit } from '../app/core';

/*
{
    subreddits: {
      'programming': {...},
      'javascript': {...},
      'funny': {...}
      .
      .
      .
  }
}
*/

describe('core', () => {
  describe('clearAllSubreddits', () => {
    it('clears all subreddits from collection', () => {
      let state = fromJS({
        subreddits: {
          'programming': {},
          'javascript' : {}
        }
      });

      let nextState = clearAllSubreddits(state);

      expect(nextState).to.equal(fromJS({
        subreddits: {}
      }));
    });
  });


  /*
  {
      error: '....',
      subreddits: {
        'programming': {...},
        'javascript': {...},
        'funny': {...},
      .
      .
      .
    }
  }
  */


  describe('addSubreddit', () => {

    it('adds a subreddit to map collection', () => {
      let state = fromJS({
        subreddits: Map()
      });

      let nextState = addSubreddit('programming');

      expect(nextState.subreddits.size()).to.equal(1);
      expect(nextState.subreddits).to.contain.key('programming');
    });

    it('sets error on missing subreddit value', () => {
      let state = fromJS({
        subreddits: Map()
      });

      let nextState = addSubreddit(state);

      expect(nextState).to.equal(fromJS({
        errorMessage: 'Missing subreddit value',
        subreddits: {}
      }));
    });

    it('sets error on duplicate subreddit in map', () => {
      let state = fromJS({
        subreddits: {
          'programming' : {}
        }
      });

      let nextState = addSubreddit(state, 'programming');

      expect(nextState).to.equal(fromJS({
        errorMessage: 'Subreddit already exists in collection',
        subreddits: {}
      }));
    });
  });

  describe('removeSubreddit', () => {
    it('removes a specified subreddit from the map collection', () => {
      let state = fromJS({
        subreddits: {
          'programming' : {},
          'javascript' : {}
        }
      });

      let nextState = removeSubreddit(state, 'programming');

      expect(nextState).to.equal(fromJS({
        subreddits: {
          'javascript' : {}
        }
      }))
    });

    it('removes a subreddit that does not exist in collection', () => {
      let state = fromJS({
        subreddits: {
          'programming' : {}
        }
      });

      let nextState = removeSubreddit(state, 'funny');

      expect(nextState).to.equal(fromJS({
        errorMessage: 'Subreddit does not exist in collection'
        subreddits: {
          'programming': {}
        }
      }));
    });
  });



});
