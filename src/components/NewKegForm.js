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
      IBU: event.target.ibu.value, 
      ABV: event.target.abv.value, 
      quantity: 124, 
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
          type='text'
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
        <button type="submit">Add Keg to Tap List</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;