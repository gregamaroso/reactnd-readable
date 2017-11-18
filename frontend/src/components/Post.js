import React, { Component } from 'react';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';

import { transformEpochToDate } from '../util/helpers';
import Breadcrumb from './Breadcrumb';
import Error from './Error';
import Comment from './Comment';
import PostVote from './PostVote';

export default class Post extends Component {
  render() {
    const { category, post, comments, isLoading, hasErrored } = this.props;
    const { title, body, author, timestamp, voteScore } = post;
    const date = transformEpochToDate(timestamp);

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
          <div className="post__content">
            {post && (
              <article>
                <h1>{title}</h1>

                <div className="post__meta">
                  <div className="post__meta-author">
                    {author}
                  </div>

                  <div className="post__meta-date">
                    {date}
                  </div>
                </div>

                <div className="post__body">
                  {body}
                </div>

                 <PostVote score={voteScore} />
              </article>
            )}

            <div className="post__comments">
            {comments.map((comment) => (
              <Comment comment={comment} />
            ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}
