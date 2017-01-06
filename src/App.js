import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';
import withHandlers from 'recompose/withHandlers';

const CreateItem = ({ handleKeyUp }) => (
  <div>
    <form>
      <textarea
        onKeyUp={handleKeyUp}
        autoFocus
        name="text-input"
      />
    </form>
  </div>
);

const Item = ({ description }) => (
  <li>
    {description}
  </li>
);

const App = ({ items, handleKeyUp }) => (
  <div>
    <CreateItem {...{ handleKeyUp }} />
    <ul className="App">
      {items.map((itemProps) => <Item {...itemProps} />)}
    </ul>
  </div>
);

const mapState = ({ items }) => ({ items });

export default connect(mapState, actions)(App);
