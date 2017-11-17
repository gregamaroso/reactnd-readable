import {
  api,
  headers
} from '../../util/api';

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

export function postsFetchDataSuccess(posts) {
console.log(posts);
  return {
    type: POSTS_FETCH_SUCCESS,
    posts
  };
}

/**
 * Action Creators
 */

export function postsFetchData(category) {
  return (dispatch) => {
    dispatch(postsAreLoading(true));

    fetch(`${api}/${category}/posts`, { headers })
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        dispatch(postsAreLoading(false));
        return res;
      })
      .then((res) => res.json())
      .then((posts) => dispatch(postsFetchDataSuccess(posts)))
      .catch(() => dispatch(postsHasErrored(true)));
  };
}
