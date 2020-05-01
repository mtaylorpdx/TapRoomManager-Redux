import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {
  test('Should return default state if no action type is passed into the reducer', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
    });
});

describe('tapListReducer', () => {

  let action;
  const kegData = {
    name: "All Day IPA",
    brewery: "Founders",
    price: "5.00",
    ibu: "42",
    abv: "4.7",
    quantity: 124,
    id: 1
  };

  test('Should successfully add new keg data to masterTapList', () => {
    const { name, brewery, price, ibu, abv, quantity, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brewery: brewery,
      price: price,
      ibu: ibu,
      abv: abv,
      quantity: quantity,
      id: id
    };

    expect(tapListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brewery: brewery,
        price: price,
        ibu: ibu,
        abv: abv,
        quantity: quantity,
        id: id
      }
    })
  })
});



// {
//   name: "All Day IPA",
//   brewery: "Founders",
//   price: "5.00",
//   ibu: "42",
//   abv: "4.7",
//   quantity: 124,
//   id: 1
// },
// {
//   name: "Blackstone",
//   brewery: "Driftwood Brewing",
//   price: "6.00",
//   ibu: "20",
//   abv: "6",
//   quantity: 124,
//   id: 2
// }