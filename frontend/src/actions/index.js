import * as ReadableAPI from '../util/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

// Action Creator receiveCategories
// payload: categories
// @returns function
export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  ReadableAPI
    .fetchCategories()
    .then(categories => dispatch(receiveCategories(categories)))
);
