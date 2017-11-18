import { combineReducers } from 'redux';

import {
  categories,
  categoriesHasErrored,
  categoriesAreLoading
} from '../store/categories/reducers'

import {
  posts,
  postsHasErrored,
  postsAreLoading
} from '../store/posts/reducers'

import {
  comments,
  commentsHasErrored,
  commentsAreLoading
} from '../store/comments/reducers'

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
