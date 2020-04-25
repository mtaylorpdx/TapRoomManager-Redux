import React from 'react';
import Header from './Layout/Header';
import KegController from './KegController';
import Footer from './Layout/Footer';
import Container from "@material-ui/core/Container";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="md">
        <KegController />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;