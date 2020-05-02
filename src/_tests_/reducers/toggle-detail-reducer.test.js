import toggleDetailReducer from '../../reducers/toggle-detail-reducer';
import * as c from '../../actions/ActionTypes';

describe('toggleDetailReducer', () => {
  test('Should return default state if no action type is passed into the reducer', () => {
    expect(toggleDetailReducer({}, { type: null })).toEqual({});
    });

    test('Should toggle state', () => {
      expect(toggleDetailReducer(true, {type: c.TOGGLE_DETAIL})).toEqual(false);
    });
});