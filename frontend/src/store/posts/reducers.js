import {
  POST_VOTE_SUCCESS,
  POST_UPDATE_SUCCESS,
  POSTS_FETCH_SUCCESS,
  POSTS_HAS_ERRORED,
  POSTS_ARE_LOADING,
  POSTS_REORDER_SUCCESS,
} from './constants';


const defaultPostsState = {byId: {}, allIds: []};

/**
 * Reducers
 *
 * Note: all reducer functions needs to be added to reducers/index.js
 */

export function postsHasErrored(state = false, action) {
  switch (action.type) {
    case POSTS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function postsAreLoading(state = false, action) {
  switch (action.type) {
    case POSTS_ARE_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function posts(state = defaultPostsState, action) {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      const { posts } = action;
      return {
        byId: posts.filter((p) => p.deleted === false).reduce((a, p) => {
          a[p.id] = p;
          return a;
        }, {}),
        allIds: posts.map((p) => p.id)
      };

   case POST_VOTE_SUCCESS:
   case POST_UPDATE_SUCCESS:
     const { post } = action;
     return {
       ...state,
       byId: {
         ...state['byId'],
         [post.id]: post,
       }
     };

   case POSTS_REORDER_SUCCESS:
     const { sortKey } = action;

     // score_desc, score_asc, date_desc, date_asc
     const allPosts = Object.assign({}, state.byId);
     const key = sortKey.indexOf('score') === 0 ? 'voteScore' : 'timestamp';
     const dir = sortKey.indexOf('_desc') === 0 ? 'down' : 'up';

console.log(key, dir);
     state.allIds.sort((a, b) => {
       if (dir === 'down') {
         return allPosts[a][key] + allPosts[b][key];
       }
       else {
         return allPosts[a][key] - allPosts[b][key];
       }
     });
console.log(state.allIds);

     return state;

    default:
      return state;
  }
}
