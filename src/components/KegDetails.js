import React from "react";
import PropTypes from "prop-types";

function KegDetails(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - {keg.brewery}</h3>
      <p>${keg.price}</p>
      <p>IBU: {keg.IBU}</p>
      <p>ABV: {keg.ABV}</p>
      <p>Pints remaining: {keg.quantity}</p>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onSellingPint: PropTypes.func
};

export default KegDetails;
