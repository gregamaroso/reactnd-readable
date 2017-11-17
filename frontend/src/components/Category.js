import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';

import { postsFetchData } from '../store/Posts/actions';

class Category extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchData(match.params.category);
  }

  render() {
    const { isLoading, hasErrored, posts, category } = this.props;

    return (
      <div>
        <p className="temp-description">This page will have a list of all posts for a single cateogry along with some metadata for each.</p>

        <div className="breadcrumb"><Link to="/">Home</Link> &raquo; [ {category.name} ]</div>

        <ul>
          {posts.map((post) => (
          <li key={post.id}>
            <Link to={'/post/' + post.id}>{post.title}</Link> (1024 comments, last comment 12/1/2016)
          </li>
          ))}
        </ul>
      </div>
    );
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
    // TODO: I should break this into 2 dispatches. Currently I'm chaining Promises
    fetchData: (category) => dispatch(postsFetchData(category))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
