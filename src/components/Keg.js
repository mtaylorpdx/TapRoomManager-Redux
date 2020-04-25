import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';

function Keg(props){

  return (
    <React.Fragment>
      <Card className='kegCard'>
          <div onClick = {() => props.whenKegClicked(props.id)}>
            <h3>{props.name} - {props.brewery}</h3>
            <p>${props.price}</p>
            <p>IBUs: {props.ibu}</p>
            <p>ABV: {props.abv}</p>
            <p>Pours remaining: {props.quantity}</p>
            <hr/>
          </div>
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