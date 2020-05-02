import * as c from './ActionTypes';

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id
});

export const addKeg = (keg) => {
  const { name, brewery, price, ibu, abv, quantity, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brewery: brewery,
    price: price,
    ibu: ibu,
    abv: abv,
    quantity: quantity,
    id: id
  }
}

export const detailKeg = (keg) => {
  const { name, brewery, price, ibu, abv, quantity, id } = keg;
  return {
    type: c.DETAIL_KEG,
    name: name,
    brewery: brewery,
    price: price,
    ibu: ibu,
    abv: abv,
    quantity: quantity,
    id: id
  }
}