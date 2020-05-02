import tapListReducer from './tap-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  kegList: tapListReducer,
});

export default rootReducer;