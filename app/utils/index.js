import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import DevTools from './../containers/DevToolsWindow';
export function createConstants (...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action) : state;
  };
}

export function createDevToolsWindow (store) {
  const win = window.open(
     null,
     'redux-devtools',
     `width=400,height=${window.outerHeight},menubar=no,location=no,resizable=yes,scrollbars=no,status=no`
   );

  win.location.reload();
  const node = (
    <Provider store={store}>
      <DevTools />
    </Provider>
  );

  setTimeout(() => {
    win.document.write('<div id="react-devtools-root"></div>');
    win.document.body.style.margin = '0';
    ReactDOM.render(node, win.document.getElementById('react-devtools-root')
    );
  }, 10);
}
