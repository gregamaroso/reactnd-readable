import API from '../../util/api';

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
    categories
  };
}

/**
 * Action Creators
 */

export function categoriesFetchData() {
  return (dispatch) => {
    // dispatch(categoriesAreLoading(true));

    API.getCategories()
      .then((categories) => {
        dispatch(categoriesAreLoading(false));
        dispatch(categoriesFetchDataSuccess(categories));
      })
      .catch(() => dispatch(categoriesHasErrored(true)));
  }
}
