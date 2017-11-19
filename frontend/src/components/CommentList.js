import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

class CommentList extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div className="post__comments">
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
      </div>
    );
  }
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
