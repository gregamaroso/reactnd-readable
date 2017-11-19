import { createSelector } from 'reselect';
import { getActiveCategoryPath } from './routes';

const getAllCategories = (state, props) => state;

export const getVisibleCategory = createSelector(
  [getActiveCategoryPath, getAllCategories],
  (category, categories) => categories.byId[category] || {}
);

export const getCategoryByPost = createSelector(
  [getActiveCategoryPath, getAllCategories],
  (categoryPath, allCategories) => allCategories.byId[categoryPath] || {}
);
