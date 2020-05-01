import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';

const KegDetails = (props) => {
  // const { keg, onClickingDelete } = props;

  return (
    <div>
      <Card className="detailsCard">
        <h5>Keg Details </h5>
         <p>Beer Name: {props.keg.name} <br/>
          Brewery Name: {props.keg.brewery}<br/>
          Price: ${props.keg.price}<br/>
          IBU: {props.keg.ibu}<br/>
          ABV: {props.keg.abv}%<br/>
          Pints remaining: {props.keg.quantity}</p>
        <button onClick={()=> props.onClickingDelete(props.keg.id) }>Remove Tap</button>
      </Card>
    </div>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetails;
