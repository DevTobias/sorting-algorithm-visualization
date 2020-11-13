/* eslint-disable require-jsdoc */

import React, {Component} from 'react';

import MainNavbar from './navbar.component';
import SideNav from './sidenav.component';

export default class SortingVisualizer extends Component {
  render() {
    return (
      <main className="App">
        <MainNavbar />
        <SideNav />
        <header className="App-header">
          <p>Sorting Algorithm Visualization</p>
        </header>
      </main>
    );
  }
}
