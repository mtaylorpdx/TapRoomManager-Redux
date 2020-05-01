import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class KegController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: {},
      masterKegList: [
        {
          name: "All Day IPA",
          brewery: "Founders",
          price: "5.00",
          ibu: "42",
          abv: "4.7",
          quantity: 124,
          id: 1
        },
        {
          name: "Blackstone",
          brewery: "Driftwood Brewing",
          price: "6.00",
          ibu: "20",
          abv: "6",
          quantity: 124,
          id: 2
        }
      ]
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newKegList});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id ===id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({masterKegList: newMasterKegList, selectedKeg: null});
  }

  // Other selling pint function below. Still not bug-free.

  // handleSellingPint = (id) => {
  //   const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
  //   if (selectedKeg.quantity >= 1) {
  //     const updatedKeg = {...selectedKeg, quantity: selectedKeg.quantity - 1};
  //     const kegList = this.state.masterKegList.filter(keg => keg.id !== id);
  //     this.setState({
  //       masterKegList: [...kegList, updatedKeg]
  //     });
  //   }
  //   else {
  //     //change string to message
  //   }
  // }

  handleSellingPint = (key) => {
    const kegList = this.state.masterKegList;
    kegList[(key - 1)].quantity -=1;
    this.setState({
      masterKegList: kegList
    });
  }

  render() {
    let beerDetails = null;

    if (this.state.selectedKeg != null) {
      beerDetails = <KegDetails 
        keg = {this.state.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg} />
    }

    return (
      <React.Fragment>
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
        <Row>
          <Col md={8}>
            <KegList 
              kegList={this.state.masterKegList}
              onKegSelection={this.handleChangingSelectedKeg}
              onSellingPint={this.handleSellingPint} />
          </Col>
          <Col md={4}>
            {beerDetails}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

KegController = connect()(KegController);

export default KegController;