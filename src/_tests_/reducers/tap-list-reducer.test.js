import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {
  test('Should return default state if no action type is passed into the reducer', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
    });
});