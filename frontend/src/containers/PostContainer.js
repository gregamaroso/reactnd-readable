import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { getCategoryByPost } from '../selectors/categories';
import { getPostById, isValidPostRoute } from '../selectors/posts';
import { getVisibleComments } from '../selectors/comments';
import { commentsFetchData } from '../store/comments/actions';
import Post from '../components/Post';
import Error from '../components/Error';

class PostContainer extends Component {
  componentDidMount() {
    const { comments } = this.props;

    // Load comments once when the component mounts
    if (!comments.length) {
      this.props.fetchData(this.props.match.params.postid);
    }
  }

  render() {
    const { category, post, comments, hasErrored, isLoading, isValidRoute } = this.props;

    const props = {
      isLoading,
      hasErrored,
      category,
      post,
      comments,
    };
    return (
      <div>
        {isValidRoute && (
          <Post {...props} />
        )}

        {!isValidRoute && (
          <Error message="Invalid post" />
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isValidRoute: isValidPostRoute(state.posts, ownProps),
    category: getCategoryByPost(state.categories, ownProps),
    post: getPostById(state.posts, ownProps),
    comments: getVisibleComments(state.comments, ownProps),
    hasErrored: state.commentsHasErrored,
    isLoading: (state.commentsAreLoading || state.categoriesAreLoading || state.postsAreLoading),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchData: (postId) => dispatch(commentsFetchData(postId)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContainer));
