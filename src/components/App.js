import React from 'react';
import './App.css';
import Header from './Layout/Header';
import KegController from './KegController';
import Footer from './Layout/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <KegController />
      <Footer />
    </React.Fragment>
  );
}

export default App;