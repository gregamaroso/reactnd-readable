import { combineReducers } from 'redux';

import {
  RECEIVE_CATEGORIES,
} from '../actions';

const getAll = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      const { categories } = action;

      return {
        ...state,
        categories
      };
    default:
      return state;
  }
};

const categories = combineReducers({
  getAll,
});

export default categories;
