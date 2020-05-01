export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const addKeg = (keg) => {
  const { name, brewery, price, ibu, abv, quantity, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brewery: brewery,
    price: price,
    ibu: ibu,
    abv: abv,
    quantity: quantity,
    id: id
  }
}
