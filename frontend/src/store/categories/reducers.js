import {
  CATEGORIES_FETCH_SUCCESS,
  CATEGORIES_HAS_ERRORED,
  CATEGORIES_ARE_LOADING
} from './constants';


/**
 * Reducers
 *
 * Note: all reducer functions needs to be added to reducers/index.js
 */

export function categoriesHasErrored(state = false, action) {
  switch (action.type) {
    case CATEGORIES_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function categoriesAreLoading(state = false, action) {
  switch (action.type) {
    case CATEGORIES_ARE_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

// TODO: have this reducer merge state with existing comments
export function categories(state = [], action) {
  switch (action.type) {
    case CATEGORIES_FETCH_SUCCESS:
      return action.categories;

    default:
      return state;
  }
}
