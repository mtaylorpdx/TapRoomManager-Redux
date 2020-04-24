import React from "react";
import PropTypes from "prop-types";

function Keg(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.brewery}</h3>
        <p>${props.price}</p>
        <p>IBUs: {props.IBU}</p>
        <p>ABV: {props.ABV}</p>
        <p>Pours remaining: {props.quantity}</p>
        <hr/>
      </div>
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