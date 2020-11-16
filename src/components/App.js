/* eslint-disable require-jsdoc */
import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainNavbar from './navigation/Navbar.component';
// eslint-disable-next-line max-len
import SortingVisualizer from './sorting-visualizer/SortingVisualizer.component';
// eslint-disable-next-line max-len
import PathfindingVisualizer from './pathfinding-visualizer/PathfindingVisualizer.component';
import MarkovAlgorithm from './markov-algorithm/MarkovAlgorithm.component';
import Registermaschine from './register-maschine/Registermaschine.component';
import Home from './home/Home.component';

import './App.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavbar />
        <Switch>
          <Route path="/sorting-visualizer">
            <SortingVisualizer />
          </Route>
          <Route path="/pathfinding-visualizer">
            <PathfindingVisualizer />
          </Route>
          <Route path="/markov-algorithm">
            <MarkovAlgorithm />
          </Route>
          <Route path="/register-maschine">
            <Registermaschine />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
