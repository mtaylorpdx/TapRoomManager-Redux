import React from 'react';
import './App.css';
import Header from './Layout/Header';
import KegController from './KegController';
import Footer from './Layout/Footer';
import Container from "@material-ui/core/Container";

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