'use stict'
import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Details from './components/Details/Details';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';
import './style.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Calendar />
      <Details />
      <Footer />
    </>
  );
}

export default App;
