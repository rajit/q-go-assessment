import { combineReducers } from 'redux';
import todos from '../logic/todos';
import itemFilters from '../logic/itemFilters';

export default function createReducer() {
  return combineReducers({
    todos,
    itemFilters,
  });
}
