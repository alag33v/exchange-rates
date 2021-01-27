import { combineReducers } from 'redux';
import { exchangeReducer } from './exchangeReducer';

export const rootReducer = combineReducers({
  exchange: exchangeReducer
});
