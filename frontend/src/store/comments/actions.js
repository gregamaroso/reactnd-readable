import API from '../../util/api';

import {
  COMMENT_VOTE_SUCCESS,
  COMMENT_UPDATE_SUCCESS,
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
    comments
  };
}

export function commentVoteSuccess(comment) {
  return {
    type: COMMENT_VOTE_SUCCESS,
    comment,
  };
}

export function commentUpdateSuccess(comment) {
  return {
    type: COMMENT_UPDATE_SUCCESS,
    comment,
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

export function commentsHandleVote(id, direction) {
  return (dispatch) => {
    API.voteOnComment(id, direction)
      .then((res) => dispatch(commentVoteSuccess(res)));
  };
}

export function updateComment(origComment, updates) {
  return (dispatch) => {
    const comment = {
      ...origComment,
      ...updates
    };

    API.updateComment(origComment.id, comment)
      .then((newComment) => dispatch(commentUpdateSuccess(newComment)));
  };
}
