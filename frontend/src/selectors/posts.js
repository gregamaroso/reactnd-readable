import { createSelector } from 'reselect';
import { getActiveCategoryPath, getActivePostId } from './routes';

const getAllPosts = (state, props) => state;

// Returns an array post objects. It either returns all items, or
// only the items for the active category (based on router path)
export const getVisiblePosts = createSelector(
  [getActiveCategoryPath, getAllPosts],
  (category, posts) =>
    posts.allIds.reduce((a, pid) => {
      const po = posts.byId[pid] || {};
      if (po.deleted === true) {
        return a;
      }
      if (category === 'all' || po.category === category) {
        a.push(po);
      }
      return a;
    }, [])
);

export const getPostById = createSelector(
  [getActivePostId, getAllPosts],
  (postId, posts) => posts.byId[postId] || {}
);

export const isValidPostRoute = createSelector(
  [getAllPosts, getActiveCategoryPath, getActivePostId],
  (posts, catPath, postId) => {
    // Generate a list of all valid routes for the post pages
    const allRoutes = posts.allIds.reduce((a, pid) => {
      const po = posts.byId[pid] || {};
      if (po.deleted === true) {
        return a;
      }
      a.push(po.category + '/' + po.id);
      return a;
    }, []);

    // Create a string with the current route
    const currentRoute = catPath + '/' + postId;

    // Return true is the current route is contained in the list of available routes
    return allRoutes.includes(currentRoute);
  }
);
