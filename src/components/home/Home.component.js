/* eslint-disable require-jsdoc */
import React from 'react';
import BCard from '../misc/Card.component';
import './Home.css';

export default function Home() {
  return (
    <div className='flex-container'>
      <BCard title='Sortieralgorithmen' text='Eine Visualisierung der
        bekanntesten Sortieralgorithmen mit kommentierten Quelltext
        verschiedener Sprachen und Laufzeitanalyse.' img='https://mdbootstrap.com/img/Photos/Others/images/43.jpg'
      route='/sorting-visualizer'/>
      <BCard title='Wegfindungsalgorithmen' text='Eine Visualisierung der
        bekanntesten Wegfindungsalgorithmen mit kommentierten Quelltext
        verschiedener Sprachen und Laufzeitanalyse.' img='https://mdbootstrap.com/img/Photos/Others/images/43.jpg'
      route='/pathfinding-visualizer'/>
      <BCard title='Markov-Algorithmen' text='Ein Tool um Markov-Algorithmen
        zu verfassen, auszuführen und zu debuggen.' img='https://mdbootstrap.com/img/Photos/Others/images/43.jpg'
      route='/markov-algorithm'/>
      <BCard title='Registermaschine' text='Ein Tool um Registermaschinen
      zu verfassen, auszuführen und zu debuggen.' img='https://mdbootstrap.com/img/Photos/Others/images/43.jpg'
      route='/register-maschine'/>
    </div>
  );
}

