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
