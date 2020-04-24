import React from "react";
import PropTypes from "prop-types";

function KegDetails(props){
  const { keg, onClickingDelete } = props;

  const sellPint = () => {
    keg.quantity -=1;
  };

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - {keg.brewery}</h3>
      <p>${keg.price}</p>
      <p>IBU: {keg.IBU}</p>
      <p>ABV: {keg.ABV}</p>
      <p>Pints remaining: {keg.quantity}</p>
      <button onClick={()=> onClickingDelete(keg.id) }>Remove Tap</button>
      <button onClick={sellPint}>Sell Pint</button>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetails;
