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

export function categoriesAreLoading(state = true, action) {
  switch (action.type) {
    case CATEGORIES_ARE_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function categories(state = {byId: {}, allIds: []}, action) {
  switch (action.type) {
    case CATEGORIES_FETCH_SUCCESS:
      const { categories } = action;
      return {
        byId: categories.reduce((a, c) => {
          a[c.path] = c;
          return a;
        }, {}),
        allIds: categories.map((c) => c.path)
      };

    default:
      return state;
  }
}
