/* eslint-disable require-jsdoc */

import React, {Component} from 'react';

import Settings from '../settings/Settings.component';

import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
  render() {
    return (
      <div className="App">
        <Settings />
        <header className="App-header">
          <p>Wegfindungsalgorithmen</p>
        </header>
      </div>
    );
  }
}
