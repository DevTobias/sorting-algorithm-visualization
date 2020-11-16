/* eslint-disable require-jsdoc */

import React, {Component} from 'react';

import Settings from '../settings/Settings.component';

import './SortingVisualizer.css';

export default class SortingVisualizer extends Component {
  render() {
    return (
      <div className="App">
        <Settings />
        <header className="App-header">
          <p>Sortingeralgorithmen</p>
        </header>
      </div>
    );
  }
}
