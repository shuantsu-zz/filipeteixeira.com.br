import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Highlight from './components/Highlight';
import Portfolio from './components/Portfolio/';
import Footer from './components/Footer';
import './style.scss';
import './responsive.scss';

ReactDOM.render(
  <>
  <Header />
  <Highlight />
  <Portfolio />
  <Footer />
  </>,
  document.getElementById('root')
);