import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types'

function KegList(props){
  return(
    <React.Fragment>
      {props.kegList.map((keg) =>
      <Keg 
        whenKegClicked = { props.onKegSelection } 
        whenSellClicked = { props.onSellingPint }
        name={keg.name} 
        brewery={keg.brewery} 
        price={keg.price} 
        IBU={keg.IBU} 
        ABV={keg.ABV}
        quantity={keg.quantity}
        id={keg.id}
        key={keg.id} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  whenSellClicked: PropTypes.func
};

export default KegList;