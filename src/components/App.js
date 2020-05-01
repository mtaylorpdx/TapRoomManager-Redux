import React from 'react';
import Header from './Layout/Header';
import KegController from './KegController';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <KegController />
      </Container>
    </React.Fragment>
  );
}

export default App;