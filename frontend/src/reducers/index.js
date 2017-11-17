import { combineReducers } from 'redux';

import {
  category,
  categories,
  categoriesHasErrored,
  categoriesAreLoading
} from '../store/categories/reducers'

import {
  posts,
  postsHasErrored,
  postsAreLoading
} from '../store/posts/reducers'

export default combineReducers({
  category,
  categories,
  categoriesHasErrored,
  categoriesAreLoading,

  posts,
  postsHasErrored,
  postsAreLoading,
});
