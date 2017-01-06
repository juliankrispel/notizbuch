import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reducer from './reducer';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


const store = createStore(
  combineReducers({ items: reducer }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
