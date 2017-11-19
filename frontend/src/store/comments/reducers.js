import {
  COMMENT_VOTE_SUCCESS,
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

export function comments(state = {byId: {}, allIds: []}, action) {
  switch (action.type) {
    case COMMENTS_FETCH_SUCCESS:
      const { comments } = action;
      return {
        byId: comments.filter((c) => c.deleted === false).reduce((a, c) => {
          a[c.id] = c;
          return a;
        }, {}),
        allIds: comments.map((c) => c.id)
      };

    case COMMENT_VOTE_SUCCESS:
      const { comment } = action;
      return {
        ...state,
        byId: {
          ...state['byId'],
          [comment.id]: comment,
        }
      };

    default:
      return state;
  }
}
