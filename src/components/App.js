/* eslint-disable require-jsdoc */
import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'rsuite/dist/styles/rsuite-dark.css';

import './App.css';

import SortingVisualizer from './sorting-visualizer.component';

function App() {
  return (
    <div>
      <SortingVisualizer />
    </div>
  );
}

export default App;
