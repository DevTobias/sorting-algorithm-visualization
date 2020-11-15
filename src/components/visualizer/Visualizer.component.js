/* eslint-disable require-jsdoc */

import React, {Component} from 'react';

import Settings from '../settings/Settings.component';

import './Visualizer.css';

export default class SortingVisualizer extends Component {
  render() {
    return (
      <main className="App">
        <Settings />
        <header className="App-header">
          <p>Sorting Algorithm Visualization</p>
        </header>
      </main>
    );
  }
}
