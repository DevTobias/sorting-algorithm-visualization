/* eslint-disable require-jsdoc */
import React from 'react';

import './App.css';

import MainNavbar from './navigation/Navbar.component';
import SortingVisualizer
  from './visualizer/Visualizer.component';

function App() {
  return (
    <div>
      <MainNavbar />
      <SortingVisualizer />
    </div>
  );
}

export default App;
