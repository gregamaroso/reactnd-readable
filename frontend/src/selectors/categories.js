import { createSelector } from 'reselect';
import { getActiveCategoryPath } from './routes';

const allCategories = (state, props) => state;

export const getVisibleCategory = createSelector(
  [getActiveCategoryPath, allCategories],
  (category, categories) => categories.byId[category] || {}
);

export const getAllCategories = createSelector(
  [allCategories],
  (categories) => categories.allIds.map(c => categories.byId[c])
);

export const getCategoryByPost = createSelector(
  [getActiveCategoryPath, allCategories],
  (categoryPath, allCategories) => allCategories.byId[categoryPath] || {}
);
