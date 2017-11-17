import {
  api,
  headers
} from '../../util/api';

import {
  POSTS_FETCH_SUCCESS,
  POSTS_HAS_ERRORED,
  POSTS_ARE_LOADING
} from './constants';

import { categoryFetchDataSuccess } from '../Category/actions';


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

    const postsPromise = fetch(`${api}/${categoryPath}/posts`, { headers });
    const categoryPromise = fetch(`${api}/categories`, { headers });

    Promise
      .all([postsPromise, categoryPromise])
      .then(responses => {
        let isError = false;
        let messages = [];

        responses.forEach(res => {
          if (!res.ok) {
            isError = true;
            messages.push(res.statusText);
          }
        });

        if (isError) {
          throw Error(messages.join("\n"));
        }

        dispatch(postsAreLoading(false));
        return responses;
      })
      .then(responses => {
        return Promise.all(responses.map(res => res.json()));
      })
      .then(responses => {
        const [ posts, allCategories ] = responses;
        const category = allCategories.categories.find(cat => cat.path === categoryPath);
        dispatch(postsFetchDataSuccess(posts));
        dispatch(categoryFetchDataSuccess(category));
      })
      .catch((e) => {
        dispatch(postsHasErrored(true))
      });
  };
}
