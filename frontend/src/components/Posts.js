import React, { Component } from 'react';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';

import Breadcrumb from './Breadcrumb';
import Error from './Error';

export default class Posts extends Component {
  render() {
    const { isLoading, hasErrored, posts, category, showCategoryBreadcrumb } = this.props;

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

        <ul className="posts">
          {posts.map((post) => (
          <li key={post.id}>
            <h3><Link to={'/' + post.category + '/' + post.id}>{post.title}</Link></h3>
            <div>by {post.author}</div>
            <div>Category: {post.category} / Comments: {post.commentCount} / Score: {post.voteScore}</div>
          </li>
          ))}
        </ul>
      </div>
    );
  }
}
