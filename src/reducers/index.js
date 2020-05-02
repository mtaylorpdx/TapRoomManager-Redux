import tapListReducer from './tap-list-reducer';
import toggleDetailReducer from './toggle-detail-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  kegList: tapListReducer,
  selectedKeg: toggleDetailReducer
});

export default rootReducer;