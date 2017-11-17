import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';

import { postsFetchData } from '../store/Category/actions';

class Category extends Component {
  componentDidMount() {
    const { match } = this.props;
    const category = match.params.category;
    this.props.fetchData(category);
  }

  render() {
    const { isLoading, hasErrored, posts } = this.props;

    return (
      <div>
        <p className="temp-description">This page will have a list of all posts for a single cateogry along with some metadata for each.</p>

        <div className="breadcrumb"><Link to="/">Home</Link> &raquo; [ category ]</div>

        <ul>
          {posts.map((post) => (
          <li key={post.id}>
            <Link to={'/post/' + post.id}>{post.title}</Link> (1024 comments, last comment 12/1/2016)
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsAreLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (category) => dispatch(postsFetchData(category))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
