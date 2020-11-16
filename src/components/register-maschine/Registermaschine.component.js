/* eslint-disable require-jsdoc */

import React, {Component} from 'react';

import Settings from '../settings/Settings.component';

import './Registermaschine.css';

export default class Registermaschine extends Component {
  render() {
    return (
      <div className="App">
        <Settings />
        <header className="App-header">
          <p>Registermaschine</p>
        </header>
      </div>
    );
  }
}
