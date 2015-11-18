import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function makeStore (initialState) {
  return createStore(rootReducer, initialState);
}
