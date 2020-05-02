import tapListReducer from './tap-list-reducer';
import toggleDetailReducer from './toggle-detail-reducer';
import selectedKegReducer from './selected-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  kegList: tapListReducer,
  selectedKeg: selectedKegReducer,
  toggleDetail: toggleDetailReducer
});

export default rootReducer;