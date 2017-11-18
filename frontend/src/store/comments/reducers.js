import {
  COMMENTS_FETCH_SUCCESS,
  COMMENTS_HAS_ERRORED,
  COMMENTS_ARE_LOADING
} from './constants';

/**
 * Reducers
 *
 * Note: all reducer functions needs to be added to reducers/index.js
 */

export function commentsHasErrored(state = false, action) {
  switch (action.type) {
    case COMMENTS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function commentsAreLoading(state = false, action) {
  switch (action.type) {
    case COMMENTS_ARE_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function comments(state = [], action) {
  switch (action.type) {
    case COMMENTS_FETCH_SUCCESS:
      return action.comments;

    default:
      return state;
  }
}
