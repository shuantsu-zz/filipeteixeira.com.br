import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import data from './data.json';

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);