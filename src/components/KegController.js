import React from 'react';
import KegList from './KegList';

class KegController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <React.Component>
      <h1>KegController</h1>
      <KegList />
    </React.Component>
    );
  }
}

export default KegController;
