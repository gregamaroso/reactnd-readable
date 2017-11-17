import {
  CATEGORY_FETCH_SUCCESS,
  CATEGORY_HAS_ERRORED,
  CATEGORY_IS_LOADING
} from './constants';


/**
 * Reducers
 *
 * Note: all reducer functions needs to be added to reducers/index.js
 */

export function categoryHasErrored(state = false, action) {
 switch (action.type) {
   case CATEGORY_HAS_ERRORED:
     return action.hasErrored;

   default:
     return state;
  }
}

export function categoryIsLoading(state = false, action) {
 switch (action.type) {
   case CATEGORY_IS_LOADING:
     return action.isLoading;

   default:
     return state;
 }
}

export function category(state = {}, action) {
  switch (action.type) {
    case CATEGORY_FETCH_SUCCESS:
      return action.category;

    default:
      return state;
  }
}

// TODO: add other 2 reducers
