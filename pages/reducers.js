import { combineReducers } from 'redux';
import app from './flux/reducers';

export default function createReducer() {
  return combineReducers({
    app,
  });
}
