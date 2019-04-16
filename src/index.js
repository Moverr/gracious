import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Catter from './Sample';
import * as serviceWorker from './serviceWorker';

const data = [
    {name: "Football"},
    {name: "Baseball"},
    {name: "Basketball"},
    {name: "iPod Touch"},
    {name: "iPhone 5"},
    {name: "Nexus 7"}
  ]

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<Catter 
    />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
