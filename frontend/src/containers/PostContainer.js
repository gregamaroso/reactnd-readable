import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { commentsFetchData } from '../store/comments/actions';
import Post from '../components/Post';

class PostContainer extends Component {
  getPostId() {
    const params = this.props.match.params;
    return params.postid;
  }

  componentDidMount() {
    // Load comments on demand, but only if we don't have them already
    const { comments } = this.props;

    if (!comments.allIds.length) {
      this.props.fetchData(this.getPostId());
    }
  }

  render() {
    const { categories, posts, hasErrored, isLoading } = this.props;
    let { comments } = this.props;
    const postId = this.getPostId();

    // Create an array of post objects from the prop
    comments = comments.allIds.map((id) => {
      return comments.byId[id];
    });

    // TODO: this is too ugly to leave here
    const post = (posts && posts.byId && posts['byId'][postId]) ? posts['byId'][postId] : {};
    const category = (categories && post && post.category && categories.byId) ? categories['byId'][post.category] : {};

    // Create a local props var to dynamically sent to the Posts component
    const props = {
      isLoading,
      hasErrored,
      category,
      post,
      comments,
    };
    return <Post {...props} />;
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts,
    comments: state.comments,
    hasErrored: state.commentsHasErrored,
    isLoading: (state.commentsAreLoading || state.categoriesAreLoading || state.postsAreLoading),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (postId) => dispatch(commentsFetchData(postId))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContainer));
