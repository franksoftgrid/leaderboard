import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Leaderboard } from '../src/components/database';

function tick() {

  for (let v in Leaderboard) {
    Leaderboard[randomIntFromInterval(0, 9)].score = randomIntFromInterval(1000, 3500)
    break;
  }

  ReactDOM.render(
      <div className='container'>
        <App name={Leaderboard} />
      </div>,
    document.getElementById('root')
  );
}

// tick()

setInterval(tick, 1000);
reportWebVitals();

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}