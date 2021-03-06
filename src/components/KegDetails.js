import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';

const KegDetails = (props) => {
  return (
      <React.Fragment>
        <Card className="detailsCard">
          <h5>Keg Details </h5>
          <p>Beer Name: {props.keg.name} <br/>
            Brewery Name: {props.keg.brewery}<br/>
            Price: ${props.keg.price}<br/>
            IBU: {props.keg.ibu}<br/>
            ABV: {props.keg.abv}%</p>
          <button onClick={()=> props.onClickingDelete(props.keg.id) }>Remove Tap</button>
        </Card>
      </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetails;
