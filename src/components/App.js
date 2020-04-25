import React from 'react';
import Header from './Layout/Header';
import KegController from './KegController';
import Footer from './Layout/Footer';
import Container from "@material-ui/core/Container";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Header />
        <KegController />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;