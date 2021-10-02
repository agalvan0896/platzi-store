import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import initiaState from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, initiaState);
const history = createBrowserHistory();

const ProviderMock = props => {
  return (
    <Provider store={store}>
      <Router history={history}>{props.children}</Router>
    </Provider>
  );
};

export default ProviderMock;
