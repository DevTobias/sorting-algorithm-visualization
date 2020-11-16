/* eslint-disable require-jsdoc */

import React, {Component} from 'react';

import Settings from '../settings/Settings.component';

import './MarkovAlgorithm.css';

export default class MarkovAlgorithm extends Component {
  render() {
    return (
      <div className="App">
        <Settings />
        <header className="App-header">
          <p>Markov-Algorithmen</p>
        </header>
      </div>
    );
  }
}
