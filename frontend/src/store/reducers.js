import { combineReducers } from 'redux';

import {
  categories,
  categoriesHasErrored,
  categoriesAreLoading,
} from './categories/reducers'

import {
  posts,
  postsHasErrored,
  postsAreLoading,
} from './posts/reducers'

import {
  comments,
  commentsHasErrored,
  commentsAreLoading,
} from './comments/reducers'

export default combineReducers({
  categories,
  categoriesHasErrored,
  categoriesAreLoading,

  posts,
  postsHasErrored,
  postsAreLoading,

  comments,
  commentsHasErrored,
  commentsAreLoading,
});
