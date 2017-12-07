import API from '../../util/api';
import { generateRandomPostId } from '../../util/helpers';

import {
  COMMENT_CREATE_SUCCESS,
  COMMENT_VOTE_SUCCESS,
  COMMENT_UPDATE_SUCCESS,
  COMMENT_REMOVE_SUCCESS,
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

export function commentCreateSuccess(comment) {
  return {
    type: COMMENT_CREATE_SUCCESS,
    comment
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

export function commentRemoveSuccess(commentId) {
  return {
    type: COMMENT_REMOVE_SUCCESS,
    commentId,
  };
}

/**
 * Action Creators
 */

export function commentsFetchData(postId) {
  return (dispatch) => {
    // dispatch(commentsAreLoading(true));

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

export function createComment(comment) {
  return (dispatch) => {
    const { body, author, postId } = comment;
    const mComment = {
      id: generateRandomPostId(),
      timestamp: new Date().valueOf(),
      body,
      author,
      parentId: postId,
    };

    API.createComment(mComment)
      .then((c) => dispatch(commentCreateSuccess(c)));

    // TODO: Since a new comment is being created, technically
    //       we should update the post's comment count as well.
    //       We could either reload all posts, or just update state
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

export function removeComment(commentId) {
  return (dispatch) => {
    API.removeComment(commentId)
      .then((res) => dispatch(commentRemoveSuccess(commentId)));
  };
}
