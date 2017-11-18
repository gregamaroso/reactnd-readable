import { combineReducers } from 'redux';

import {
  posts,
  postsHasErrored,
  postsAreLoading
} from '../store/posts/reducers'

export default combineReducers({
  posts,
  postsHasErrored,
  postsAreLoading,
});
