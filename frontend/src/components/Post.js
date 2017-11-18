import React, { Component } from 'react';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';

import Breadcrumb from './Breadcrumb';
import Error from './Error';

export default class Post extends Component {
  render() {
    const { category, post, comments, isLoading, hasErrored } = this.props;

    const breadcrumbItems = post
      ? [
        (<Link to="/" key="home">Home</Link>),
        (<Link to={'/' + category.path} key="category">{category.name}</Link>),
        post.title
      ]
      : [];

    return (
      <div className="post">
        <Breadcrumb breadcrumb={breadcrumbItems} />

        {isLoading && (
          <Loading delay={200} type='spin' color='#222' className='loading' />
        )}

        {hasErrored && (
          <Error message="There's been an error loading posts" />
        )}

        {!isLoading && !hasErrored && (
          <div className="post__body">
            {post && (
              post.body
            )}

            <ul className="comments">
            {comments.map((comment) => (
              <li key={comment.id}>
                {comment.body}
              </li>
            ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
