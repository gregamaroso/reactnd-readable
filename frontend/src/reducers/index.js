import { combineReducers } from 'redux';

import {
  categories,
  categoriesHasErrored,
  categoriesAreLoading
} from '../store/Categories/reducers'

export default combineReducers({
  categories,
  categoriesHasErrored,
  categoriesAreLoading,
});
