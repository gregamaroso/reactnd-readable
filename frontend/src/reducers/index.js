import { combineReducers } from 'redux';

import {
  categories,
  categoriesHasErrored,
  categoriesAreLoading
} from '../store/Categories/reducers'

import {
  posts,
  postsHasErrored,
  postsAreLoading
} from '../store/Category/reducers'

export default combineReducers({
  categories,
  categoriesHasErrored,
  categoriesAreLoading,
  posts,
  postsHasErrored,
  postsAreLoading,
});
