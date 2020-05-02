import React from 'react';
import { connect } from 'react-redux';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';
import { Row, Col } from 'react-bootstrap';
import * as a from'./../actions'; 

class KegController extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action)
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.kegList[id];
    const {dispatch} = this.props;
    const action = a.detailKeg(selectedKeg);
    dispatch(action);
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleSellingPint = (key) => {
    const kegList = this.state.kegList;
    kegList[(key - 1)].quantity -=1;
    this.setState({
      kegList: kegList
    });
  }

  render() {
    let beerDetails = null;

    if (this.props.selectedKeg != null) {
      beerDetails = <KegDetails 
        keg = {this.props.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg} />
    }

    return (
      <React.Fragment>
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
        <Row>
          <Col md={8}>
            <KegList 
              kegList={this.props.kegList}
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

const mapStateToProps = state => {
  return {
    kegList: state.kegList,
    selectedKeg: state.selectedKeg
  }
}

KegController = connect(mapStateToProps)(KegController);

export default KegController;