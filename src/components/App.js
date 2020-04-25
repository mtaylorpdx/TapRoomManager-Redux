import React from 'react';
import Header from './Layout/Header';
import KegController from './KegController';
import Footer from './Layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
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