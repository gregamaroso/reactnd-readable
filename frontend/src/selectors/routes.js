
export const getActivePostId = (state, props) => props.match.params.postid || 'all';
export const getActiveCategoryPath = (state, props) => props.match.params.category || 'all';
