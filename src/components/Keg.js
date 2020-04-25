import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';

function Keg(props){

  return (
    <React.Fragment>
      <Card className='kegCard'>
          <button onClick = {() => props.whenKegClicked(props.id)}>Details</button>
            <h4>${props.price} {props.name} 
            <br/>
            {props.brewery}</h4>
            <h5>IBUs: {props.ibu} - ABV: {props.abv}%</h5>
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
  whenKegClicked: PropTypes.func
};

export default Keg;