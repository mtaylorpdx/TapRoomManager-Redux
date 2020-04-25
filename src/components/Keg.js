import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

function Keg(props){

  return (
    <React.Fragment>
      <Card className='kegCard'>
        <h4>${props.price} <br/>
        {props.name} by {props.brewery}</h4>
        <button onClick = {() => props.whenPintSold(props.id)}>Sell a Pint</button>
        <button onClick = {() => props.whenKegClicked(props.id)}>Details</button>
        <h5>Pours remaining: {props.quantity}</h5>
      </Card>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.string,
  ibu: PropTypes.string,
  abv: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenPintSold: PropTypes.func
};

export default Keg;