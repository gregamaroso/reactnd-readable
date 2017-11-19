import { createSelector } from 'reselect';
import { getActivePostId } from './routes';

const getAllComments = (state, props) => state;

// Returns an array comment objects. It either returns all items, or
// only the items for the active post (based on router path)
export const getVisibleComments = createSelector(
  [getActivePostId, getAllComments],
  (postId, comments) =>
    comments.allIds.reduce((a, cid) => {
      const co = comments.byId[cid] || {};
      if (co.parentId === postId) {
        a.push(co);
      }
      return a;
    }, [])
);
