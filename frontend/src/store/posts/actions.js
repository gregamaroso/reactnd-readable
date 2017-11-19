import API from '../../util/api';

import {
  POST_VOTE_SUCCESS,
  POST_UPDATE_SUCCESS,
  POSTS_FETCH_SUCCESS,
  POSTS_HAS_ERRORED,
  POSTS_ARE_LOADING,
  POSTS_REORDER_SUCCESS
} from './constants';


/**
 * Actions
 */

export function postsHasErrored(bool) {
  return {
    type: POSTS_HAS_ERRORED,
    hasErrored: bool,
  };
}

export function postsAreLoading(bool) {
  return {
    type: POSTS_ARE_LOADING,
    isLoading: bool,
  }
}

export function postsFetchDataSuccess(posts) {
  return {
    type: POSTS_FETCH_SUCCESS,
    posts
  };
}

export function postUpdateSuccess(post) {
  return {
    type: POST_UPDATE_SUCCESS,
    post
  };
}

export function postVoteSuccess(post) {
  return {
    type: POST_VOTE_SUCCESS,
    post
  };
}

export function postReorderSuccess(sortKey) {
  return {
    type: POSTS_REORDER_SUCCESS,
    sortKey,
  };
}

/**
 * Action Creators
 */

export function postsFetchData(category) {
  return (dispatch) => {
    dispatch(postsAreLoading(true));

    API.getPosts(category)
      .then((res) => {
        dispatch(postsAreLoading(false));
        dispatch(postsFetchDataSuccess(res));
      })
      .catch((e) => {
        dispatch(postsAreLoading(false));
        dispatch(postsHasErrored(true))
      });
  };
}

export function postsHandleVote(id, direction) {
  return (dispatch) => {
    API.voteOnPost(id, direction)
      .then((res) => dispatch(postVoteSuccess(res)));
  };
}

export function updatePost(origPost, changes) {
  return (dispatch) => {
    const post = {
      ...origPost,
      ...changes
    };

    API.updatePost(origPost.id, post)
      .then((newPost) => dispatch(postVoteSuccess(newPost)));
  };
}
