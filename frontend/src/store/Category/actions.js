import {
  api,
  headers
} from '../../util/api';

import {
  CATEGORY_FETCH_SUCCESS,
  CATEGORY_HAS_ERRORED,
  CATEGORY_IS_LOADING
} from './constants';


/**
 * Actions
 */

export function categoryHasErrored(bool) {
  return {
    type: CATEGORY_HAS_ERRORED,
    hasErrored: bool,
  };
}

export function categoryIsLoading(bool) {
  return {
    type: CATEGORY_IS_LOADING,
    isLoading: bool,
  }
}

export function categoryFetchDataSuccess(category) {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    category
  };
}
