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
            <Link to={'/' + post.category + '/' + post.id}>{post.title}</Link> (1024 comments, last comment 12/1/2016)
          </li>
          ))}
        </ul>
      </div>
    );
  }
}
