import React from 'react';
import Keg from './Keg';

const defaultKegList = [
  {
    name: "Beer name",
    brewery: "Brewery name",
    price:  "price",
    IBU: "biiterness",
    ABV: "alcohol content"
  },
  {
    name: "Beer name2",
    brewery: "Brewery name",
    price:  "price",
    IBU: "biiterness",
    ABV: "alcohol content"
  },
  {
    name: "Beer name3",
    brewery: "Brewery name",
    price:  "price",
    IBU: "biiterness",
    ABV: "alcohol content"
  }
]

function KegList(){
  return(
    <React.Fragment>
      <h1>KegList</h1>
      {defaultKegList.map((keg, index) =>
      <Keg name={keg.name} brewery={keg.brewery} price={keg.price} IBU={keg.IBU} ABV={keg.ABV} />
      )}
      <Keg />
    </React.Fragment>
  );
}

export default KegList;