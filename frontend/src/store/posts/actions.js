import API from '../../util/api';

import {
  POST_VOTE_SUCCESS,
  POSTS_FETCH_SUCCESS,
  POSTS_HAS_ERRORED,
  POSTS_ARE_LOADING
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

export function postVoteSuccess(post) {
  return {
    type: POST_VOTE_SUCCESS,
    post
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
