import { combineReducers } from 'redux';

import {
  category,
  categoryHasErrored,
  categoryIsLoading
} from '../store/Category/reducers'

import {
  categories,
  categoriesHasErrored,
  categoriesAreLoading
} from '../store/Categories/reducers'

import {
  posts,
  postsHasErrored,
  postsAreLoading
} from '../store/Posts/reducers'

export default combineReducers({
  category,
  categoryHasErrored,
  categoryIsLoading,

  categories,
  categoriesHasErrored,
  categoriesAreLoading,

  posts,
  postsHasErrored,
  postsAreLoading,
});
