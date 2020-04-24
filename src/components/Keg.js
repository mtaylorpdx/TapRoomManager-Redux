import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.brewery}</h3>
      <p>${props.price}</p>
      <p>IBU: {props.IBU}</p>
      <p>ABV: {props.ABV}</p>
      <p>Pours remaining: {props.quantity}</p>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.string,
  IBU: PropTypes.string,
  ABV: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;