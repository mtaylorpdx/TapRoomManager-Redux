import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types'


function KegList(props) {

  let kegSort = Object.values(props.kegList).sort((a,b) =>{
    const kegA = a.name;
    const kegB = b.name;
    return kegA < kegB ? -1 : 1;
  });

  return(
    <React.Fragment>
      {kegSort.map((keg) => (
        <Keg
          whenKegClicked = { props.onKegSelection }
          whenPintSold = { props.onSellingPint }
          name={keg.name} 
          brewery={keg.brewery} 
          price={keg.price} 
          quantity={keg.quantity}
          id={keg.id} />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onSellingPint: PropTypes.func
};

export default KegList;