import React from 'react'
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brewery: event.target.brewery.value, 
      price: event.target.price.value, 
      IBU: event.target.IBU.value, 
      ABV: event.target.ABV.value, 
      quantity: event.target.quantity.value, 
      id: v4()});
  }

  return(
    <React.Fragment>
      <form onSubmit= {handleNewKegFormSubmission}>
        <input 
          type='text'
          name='name'
          placeholder='Beer Name'/>
        <input 
          type='text'
          name='brewery'
          placeholder='Brewery'/>
        <input 
          type='number'
          name='price'
          placeholder='Price'/>
        <input 
          type='text'
          name='IBU'
          placeholder='IBUs'/>
        <input 
          type='text'
          name='ABV'
          placeholder='ABV'/>
        <input 
          type='number'
          name='quantity'
          placeholder='Quantity'/>
        <button type="submit">Add Keg to Tap List</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;