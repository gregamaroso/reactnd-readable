import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import Posts from '../components/Posts';

class PostsContainer extends Component {
  getCategoryPath() {
    const params = this.props.match.params;
    return params.category || '';
  }

  render() {
    const { isLoading, hasErrored, categories } = this.props;
    let { posts } = this.props;

    // If we're showing the posts for a single category, extract that path here
    const categoryPath = this.getCategoryPath();
    const isSingleCategoryPage = (categories && categoryPath.length);

    // The category object is just 1 element out of the categories object.
    // Rather than duplicate the data in state, we'll just extract it here as a prop.
    const category = isSingleCategoryPage ?
      categories.find((cat) => cat.path === categoryPath) : {};

    // If we're on a category page, then filter out the posts from other categories
    if (isSingleCategoryPage) {
      posts = posts.filter((post) => {
        return (post.category !== categoryPath);
      });
    }

    // Boolean for whether to show the <category> breadcrumb
    const showCategoryBreadcrumb = (category && category.name);

    // Create a local props var to dynamically sent to the Posts component
    const props = {
      isLoading,
      hasErrored,
      posts,
      categories,
      category,
      showCategoryBreadcrumb
    };
    return <Posts {...props} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    categories: state.categories,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsAreLoading,
  };
}

export default withRouter(connect(mapStateToProps)(PostsContainer));
