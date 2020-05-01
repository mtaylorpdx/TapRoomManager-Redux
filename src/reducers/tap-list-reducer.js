export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_KEG':
      const { name, brewery, price, ibu, abv, quantity, id } = action;
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
    default:
      return state;
  }
}