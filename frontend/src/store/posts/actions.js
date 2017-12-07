import API from '../../util/api';
import { generateRandomPostId } from '../../util/helpers';

import {
  POST_VOTE_SUCCESS,
  POST_CREATE_SUCCESS,
  POST_UPDATE_SUCCESS,
  POST_REMOVE_SUCCESS,
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

export function postCreateSuccess(post) {
  return {
    type: POST_CREATE_SUCCESS,
    post
  };
}

export function postUpdateSuccess(post) {
  return {
    type: POST_UPDATE_SUCCESS,
    post
  };
}

export function postRemoveSuccess(postId) {
  return {
    type: POST_REMOVE_SUCCESS,
    postId
  }
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

export function createPost(post) {
  return (dispatch) => {
    const { title, body, author, category } = post;
    const mPost = {
      id: generateRandomPostId(),
      timestamp: new Date().valueOf(),
      title,
      body,
      author,
      category,
      voteScore: 0,
      deleted: false,
      commentCount: 0,
    };

    API.createPost(mPost)
      .then((p) => dispatch(postCreateSuccess(p)));
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

export function removePost(postId) {
  return (dispatch) => {
    API.removePost(postId)
      .then((res) => dispatch(postRemoveSuccess(postId)));
  };
}
