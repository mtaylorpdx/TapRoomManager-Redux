import * as actions from './../../actions';

describe('keg list actions', () => {
  
  it('delete keg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('add keg should create ADD_KEG action', () => {
    expect(actions.addKeg({ name: 'All Day IPA',
    brewery: 'Founders',
    price: '5.00',
    ibu: '42',
    abv: '4.7',
    quantity: 124,
    id: 1 })).toEqual({ name: 'All Day IPA',
    brewery: 'Founders',
    price: '5.00',
    ibu: '42',
    abv: '4.7',
    quantity: 124,
    id: 1 });
  });
});