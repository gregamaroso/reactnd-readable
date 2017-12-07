import React, { Component } from 'react';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';

import { transformEpochToDate } from '../util/helpers';
import PostVote from './PostVote';
import Breadcrumb from './Breadcrumb';
import Error from './Error';

export default class Posts extends Component {
  render() {
    const { isLoading, hasErrored, posts, category, showCategoryBreadcrumb, handlePostsSort } = this.props;
    const breadcrumbItems = showCategoryBreadcrumb
      ? [
        (<Link to="/" key="home">Home</Link>),
        category.name
      ]
      : [];

    return (
      <div>
        {showCategoryBreadcrumb && (
          <Breadcrumb breadcrumb={breadcrumbItems} />
        )}

        {isLoading && (
          <Loading delay={200} type='spin' color='#222' className='loading' />
        )}

        {hasErrored && (
          <Error message="There's been an error loading posts" />
        )}

        {posts && (
          <div className="posts__sorting clearfix">
            <select name="sort_by" onChange={handlePostsSort}>
              <option value="">-- Sort --</option>
              <option value="score_desc">Score (high to low)</option>
              <option value="score_asc">Score (low to high)</option>
              <option value="date_desc">Date (newest first)</option>
              <option value="date_asc">Date (oldest first)</option>
            </select>
          </div>
        )}

        <ul className="posts">
          {posts.map((post) => (
          <li key={post.id}>
            <h3><Link to={'/' + post.category + '/' + post.id}>{post.title}</Link></h3>
            <div>by <strong>{post.author}</strong> on {transformEpochToDate(post.timestamp)}</div>
            <div>Category: {post.category} / Comments: {post.commentCount}</div>
            <div><PostVote post={post} /></div>
          </li>
          ))}
        </ul>

        <p><br /><Link to="/create-post">Add New Post &raquo;</Link></p>
      </div>
    );
  }
}
