import {
  POSTS_FETCH_SUCCESS,
  POSTS_HAS_ERRORED,
  POSTS_ARE_LOADING
} from './constants';


/**
 * Reducers
 *
 * Note: all reducer functions needs to be added to reducers/index.js
 */

export function postsHasErrored(state = false, action) {
  switch (action.type) {
    case POSTS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function postsAreLoading(state = false, action) {
  switch (action.type) {
    case POSTS_ARE_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function posts(state = [], action) {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return action.posts;

    default:
      return state;
  }
}
