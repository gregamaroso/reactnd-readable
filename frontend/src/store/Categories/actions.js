import {
  api,
  headers
} from '../../util/api';

import {
  CATEGORIES_FETCH_SUCCESS,
  CATEGORIES_HAS_ERRORED,
  CATEGORIES_ARE_LOADING
} from './constants';


/**
 * Actions
 */

export function categoriesHasErrored(bool) {
  return {
    type: CATEGORIES_HAS_ERRORED,
    hasErrored: bool,
  };
}

export function categoriesAreLoading(bool) {
  return {
    type: CATEGORIES_ARE_LOADING,
    isLoading: bool,
  }
}

export function categoriesFetchDataSuccess(categories) {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    categories: categories.categories  // note: the array of categories is a key of the response
  };
}

/**
 * Action Creators
 */

export function categoriesFetchData() {
  return (dispatch) => {
    dispatch(categoriesAreLoading(true));

    fetch(`${api}/categories`, { headers })
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        dispatch(categoriesAreLoading(false));
        return res;
      })
      .then((res) => res.json())
      .then((categories) => dispatch(categoriesFetchDataSuccess(categories)))
      .catch(() => dispatch(categoriesHasErrored(true)));
  };
}
