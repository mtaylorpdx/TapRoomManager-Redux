import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types'

function KegList(props){
  return(
    <React.Fragment>
      {Object.values(props.kegList).map((keg, index) => {
      return <Keg 
        whenKegClicked = { props.onKegSelection }
        whenPintSold = { props.onSellingPint }
        name={keg.name} 
        brewery={keg.brewery} 
        price={keg.price} 
        quantity={keg.quantity}
        id={keg.id}
        key={index} />
      })}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onSellingPint: PropTypes.func
};

export default KegList;