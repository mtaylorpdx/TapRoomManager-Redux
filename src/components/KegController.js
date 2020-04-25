import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';
import { Row, Col } from 'react-bootstrap';

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
        },
        {
          name: "beer3",
          brewery: "beer3",
          price: "beer3",
          ibu: "beer3",
          abv: "beer3",
          quantity: 124,
          id: 3
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

  handleSellingPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    const updatedKeg = {...selectedKeg, quantity: selectedKeg.quantity - 1};
    const kegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...kegList, updatedKeg]
    })
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

export default KegController;



// import React from 'react';
// import KegList from './KegList';
// import NewKegForm from './NewKegForm';
// import KegDetails from './KegDetails';

// class KegController extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false,
//       masterKegList: [],
//       selectedKeg: null
//     };
//   }

//   handleAddingNewKegToList = (newKeg) => {
//     const newKegList = this.state.masterKegList.concat(newKeg);
//     this.setState({masterKegList: newKegList, formVisibleOnPage: false});
//   }

//   handleChangingSelectedKeg = (id) => {
//     const selectedKeg = this.state.masterKegList.filter(keg => keg.id ===id)[0];
//     this.setState({selectedKeg: selectedKeg});
//   }

//   handleDeletingKeg = (id) => {
//     const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
//     this.setState({masterKegList: newMasterKegList, selectedKeg: null});
//   }

//   handleClick = () => {
//     if (this.state.selectedKeg != null) {
//       this.setState({
//         formVisibleOnPage: false,
//         selectedKeg: null
//       });
//     } else {
//       this.setState(prevState => ({
//         formVisibleOnPage: !prevState.formVisibleOnPage
//       }));
//     }
//   }

//   render() {
//     let currentlyVisibleState = null;
//     let buttonText = null;

//     if (this.state.selectedKeg != null) {
//       currentlyVisibleState = <KegDetails 
//         keg = {this.state.selectedKeg} 
//         onClickingDelete = {this.handleDeletingKeg} />
//       buttonText = "Return to Tap List";
//     } else if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = <NewKegForm 
//         onNewKegCreation={this.handleAddingNewKegToList} />;  
//       buttonText = "Return to Tap List";
//     } else {
//       currentlyVisibleState = <KegList 
//         kegList={this.state.masterKegList} 
//         onSellingPint={this.handleSellingPint}
//         onKegSelection={this.handleChangingSelectedKeg} />;
//       buttonText = "Add Keg";
//     }
//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </React.Fragment>
//     );
//   }
// }

// export default KegController;