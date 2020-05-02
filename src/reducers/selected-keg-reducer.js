import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brewery, price, ibu, abv, quantity, id } = action;
  switch(action.type) {
    case c.DETAIL_KEG:
      return Object.assign({}, state, {
        name: name,
        brewery: brewery,
        price: price,
        ibu: ibu,
        abv: abv,
        quantity: quantity,
        id: id
      });
      default:
        return state;
  }
}