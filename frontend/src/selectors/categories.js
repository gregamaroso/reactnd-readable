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

export const isValidCategoryRoute = createSelector(
  [allCategories, getActiveCategoryPath],
  (cats, catPath) => {
    // Generate a list of all valid routes for the post pages
    const allRoutes = cats.allIds.reduce((a, cid) => {
      const co = cats.byId[cid] || {};
      if (co.deleted === true) {
        return a;
      }
      a.push(co.path);
      return a;
    }, []);

    // Return true is the current route is contained in the list of available routes, or 'all'
    return catPath === 'all' || allRoutes.includes(catPath);
  }
);
