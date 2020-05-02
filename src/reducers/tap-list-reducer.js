import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brewery, price, ibu, abv, quantity, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brewery: brewery,
          price: price,
          ibu: ibu,
          abv: abv,
          quantity: quantity,
          id: id
        }
      });
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
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