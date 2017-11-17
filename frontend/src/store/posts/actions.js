import { getPostsByCategory } from '../../util/api';

import {
  POSTS_FETCH_SUCCESS,
  POSTS_HAS_ERRORED,
  POSTS_ARE_LOADING
} from './constants';

import { categoryFetchDataSuccess } from '../categories/actions';


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
    posts,
  };
}

/**
 * Action Creators
 */

export function postsFetchData(categoryPath) {
  return (dispatch) => {
    dispatch(postsAreLoading(true));

    getPostsByCategory(categoryPath)
      .then((res) => {
        const { category, posts } = res;
        dispatch(postsAreLoading(false));
        dispatch(postsFetchDataSuccess(posts));
        dispatch(categoryFetchDataSuccess(category));
      })
      .catch((e) => {
        dispatch(postsHasErrored(true))
      });
  };
}
