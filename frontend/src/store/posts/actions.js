import API from '../../util/api';

import {
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

export function postsFetchDataSuccess({ posts, categories }) {
  return {
    type: POSTS_FETCH_SUCCESS,
    posts,
    categories,
  };
}

/**
 * Action Creators
 *
 * TODO: combine postsFetchAllData and postsFetchCategoryData into
 *       one action creator after cosolidating the API methods
 */

export function postsFetchAllData() {
  return (dispatch) => {
    dispatch(postsAreLoading(true));

    API.getPosts()
      .then((res) => {

        // Can we combine these 2 so that we only render once?
        dispatch(postsAreLoading(false));
        dispatch(postsFetchDataSuccess(res));
      })
      .catch((e) => {
        dispatch(postsAreLoading(false));
        dispatch(postsHasErrored(true))
      });
  };
}

export function postsFetchCategoryData(categoryPath) {
  return (dispatch) => {
    dispatch(postsAreLoading(true));

    API.getPostsByCategory(categoryPath)
      .then((res) => {

        // Can we combine these 2 so that we only render once?
        dispatch(postsAreLoading(false));
        dispatch(postsFetchDataSuccess(res));
      })
      .catch((e) => {
        dispatch(postsAreLoading(false));
        dispatch(postsHasErrored(true))
      });
  };
}
