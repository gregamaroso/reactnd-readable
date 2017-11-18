import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import Posts from '../components/Posts';
import { postsFetchAllData, postsFetchCategoryData } from '../store/posts/actions';

class PostsContainer extends Component {
  getCategoryPath(params) {
    return params.category || '';
  }

  componentDidMount() {
    const categoryPath = this.getCategoryPath(this.props.match.params);
    this.props.fetchData(categoryPath);
  }

  render() {
    const { isLoading, hasErrored, posts, categories } = this.props;

    // If we're showing the posts for a single category, extract that path here
    const categoryPath = this.getCategoryPath(this.props.match.params);

    // The category object is just 1 element out of the categories object.
    // Rather than duplicate the data in state, we'll just extract it here as a prop.
    const category = (categories && categoryPath.length) ?
      categories.find((cat) => cat.path === categoryPath) : {};

    // Boolean for whether to show the <category> breadcrumb
    const showCategoryBreadcrumb = category && category.name;

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
    posts: state.posts.posts,
    categories: state.posts.categories,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsAreLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (category = '') => {
      if (category.length) {
        return dispatch(postsFetchCategoryData(category));
      }
      else {
        return dispatch(postsFetchAllData());
      }
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsContainer));
