import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TweetsComponent} from './tweets'
import reportWebVitals from './reportWebVitals';

const appEl = document.getElementById('root')

if (appEl) {
  ReactDOM.render(<App />, appEl);
}
const tweetsEl = document.getElementById("tweetme-2")
if (tweetsEl) {
  ReactDOM.render(<TweetsComponent/>, tweetsEl);
}

reportWebVitals();
