import React from "react";
import PropTypes from "prop-types";

function KegDetails(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - {keg.brewery}</h3>
      <p>${keg.price}</p>
      <p>IBU: {keg.IBU}</p>
      <p>ABV: {keg.ABV}</p>
      <p>Pours remaining: {keg.quantity}</p>
      <button onClick={()=> onClickingDelete(keg.id) }>Remove Tap</button>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetails;
