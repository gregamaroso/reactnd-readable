import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RIEInput, RIETextArea } from 'riek';
import _ from 'lodash';
import Confirm from 'react-confirm-bootstrap';

import { updatePost, removePost } from '../store/posts/actions';
import { transformEpochToDate } from '../util/helpers';
import Breadcrumb from './Breadcrumb';
import Error from './Error';
import CommentList from './CommentList';
import PostVote from './PostVote';

class Post extends Component {
  render() {
    const { category, post, comments, isLoading, hasErrored, handleUpdatePost, handleRemovePost } = this.props;
    const { title, body, author, timestamp } = post;
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
                <h1 className="editable">
                  {title && (
                    <RIEInput
                      value={title}
                      change={handleUpdatePost}
                      propName='title'
                      validate={_.isString}
                      className="fullwidth" />
                  )}
                </h1>

                <div className="post__meta">
                  <div className="post__meta-author">
                    {author}
                  </div>

                  <div className="post__meta-date">
                    {date}
                  </div>
                </div>

                <div className="post__body editable">
                  {body && (
                    <RIETextArea
                      value={body}
                      change={handleUpdatePost}
                      propName='body'
                      validate={_.isString}
                      className="fullwidth minheight--200" />
                  )}
                </div>

                <PostVote post={post} />

                <Confirm
                  onConfirm={handleRemovePost}
                  body="Are you sure you want to remove this post?"
                  confirmText="Yes"
                  title="Remove Post">
                  <button className="button--remove">remove post</button>
                </Confirm>
              </article>
            )}

            <CommentList
              postId={post.id}
              comments={comments} />
          </div>
        )}
      </div>
    )
  }
}

Post.propTypes = {
  isLoading:  PropTypes.bool.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  category:   PropTypes.object.isRequired,
  post:       PropTypes.object.isRequired,
  comments:   PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleUpdatePost: (changes) => dispatch(updatePost(ownProps.post, changes)),
    handleRemovePost: () => {
      dispatch(removePost(ownProps.post.id));

      // Go back to the homepage
      ownProps.history.push('/');
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
