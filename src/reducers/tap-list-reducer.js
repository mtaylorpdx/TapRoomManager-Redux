export default (state = {}, action) => {
  const { name, brewery, price, ibu, abv, quantity, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
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
    case 'DELETE_KEG':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}