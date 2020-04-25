import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';

function KegDetails(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <Card>
        <h5>Keg Details </h5>
         <p>Beer Name: {keg.name} <br/>
          Brewery Name: {keg.brewery}<br/>
          Price: ${keg.price}<br/>
          IBU: {keg.ibu}<br/>
          ABV: {keg.abv}%<br/>
          Pints remaining: {keg.quantity}</p>
        <button onClick={()=> onClickingDelete(keg.id) }>Remove Tap</button>
      </Card>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetails;
