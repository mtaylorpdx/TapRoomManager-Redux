import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';

function KegDetails(props){
  const { keg, onClickingDelete } = props;

  const sellPint = () => {
    keg.quantity -=1;
  };

  return (
    <React.Fragment>
      <Card className='kegCard'>
        <h5>Keg Details </h5>
         <p>Beer Name: {keg.name} <br/>
          Brewery Name:{keg.brewery}<br/>
          ${keg.price}<br/>
          IBU: {keg.ibu}<br/>
          ABV: {keg.abv}%<br/>
          Pints remaining: {keg.quantity}</p>
        <button onClick={()=> onClickingDelete(keg.id) }>Remove Tap</button>
        <button onClick={sellPint}>Sell Pint</button>
      </Card>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetails;
