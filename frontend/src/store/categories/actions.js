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

// Note: this action creator is unnecessary. I could just dispatch directly to the action from App.js
export function categoriesFetchData(categories) {
  return (dispatch) => {
    // See: API.getCategoriesAndPosts()
    dispatch(categoriesAreLoading(false));
    dispatch(categoriesFetchDataSuccess(categories));
  }
}
