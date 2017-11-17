import { getCategory, getCategories } from '../../util/api';

import {
  CATEGORY_FETCH_SUCCESS,
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

export function categoryFetchDataSuccess(category) {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    category
  }
}

export function categoriesFetchDataSuccess(allCategories) {
  const { categories } = allCategories;
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    categories
  };
}

/**
 * Action Creators
 */

export function categoriesFetchData(path = '') {
  return (dispatch) => {
    dispatch(categoriesAreLoading(true));

    if (path.length) {
      getCategory(path)
        .then((category) => {
          dispatch(categoriesAreLoading(false));
          dispatch(categoryFetchDataSuccess(category));
        })
        .catch(() => dispatch(categoriesHasErrored(true)));
    }
    else {
      getCategories()
        .then((categories) => {
          dispatch(categoriesAreLoading(false));
          dispatch(categoriesFetchDataSuccess(categories));
        })
        .catch(() => dispatch(categoriesHasErrored(true)));
    }
  }
}
