import API from '../../util/api';

import {
  COMMENTS_FETCH_SUCCESS,
  COMMENTS_HAS_ERRORED,
  COMMENTS_ARE_LOADING
} from './constants';


/**
 * Actions
 */

export function commentsHasErrored(bool) {
  return {
    type: COMMENTS_HAS_ERRORED,
    hasErrored: bool,
  };
}

export function commentsAreLoading(bool) {
  return {
    type: COMMENTS_ARE_LOADING,
    isLoading: bool,
  }
}

export function commentsFetchDataSuccess(comments) {
  return {
    type: COMMENTS_FETCH_SUCCESS,
    comments: comments.filter((comment) => comment.deleted === false)
  };
}

/**
 * Action Creators
 */

export function commentsFetchData(postId) {
  return (dispatch) => {
    dispatch(commentsAreLoading(true));

    API.getCommentsByPostId(postId)
      .then((res) => {

        dispatch(commentsAreLoading(false));
        dispatch(commentsFetchDataSuccess(res));
      })
      .catch((e) => {
        dispatch(commentsAreLoading(false));
        dispatch(commentsHasErrored(true))
      });
  };
}
