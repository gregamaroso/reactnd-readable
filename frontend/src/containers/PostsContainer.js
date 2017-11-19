import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { getVisiblePosts } from '../selectors/posts';
import { getVisibleCategory } from '../selectors/categories';
import { postReorderSuccess } from '../store/posts/actions';
import Posts from '../components/Posts';

class PostsContainer extends Component {
  render() {
    const { category, posts, isLoading, hasErrored, handlePostsSort } = this.props;

    // Boolean for whether to show the <category> breadcrumb
    const showCategoryBreadcrumb = !!category.name;

    const props = {
      isLoading,
      hasErrored,
      category,
      posts,
      showCategoryBreadcrumb,
      handlePostsSort,
    };
    return <Posts {...props} />;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    category: getVisibleCategory(state.categories, ownProps),
    posts: getVisiblePosts(state.posts, ownProps),
    hasErrored: state.postsHasErrored,
    isLoading: state.postsAreLoading,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handlePostsSort: (e) => dispatch(postReorderSuccess(e.target.value))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsContainer));
