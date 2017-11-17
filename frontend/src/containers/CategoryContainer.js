import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import Category from '../components/Category';
import { postsFetchData } from '../store/posts/actions';

class CategoryContainer extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.match.params.category);
  }

  render() {
    const { isLoading, hasErrored, posts, category } = this.props;
    return <Category
      isLoading={isLoading}
      hasErrored={hasErrored}
      posts={posts}
      category={category}
      />
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    category: state.category,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsAreLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // TODO: I should break this into 2 dispatches
    fetchData: (category) => dispatch(postsFetchData(category))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryContainer));
