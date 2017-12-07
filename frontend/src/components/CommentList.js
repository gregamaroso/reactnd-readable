import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CreateComment from './CreateComment';

class CommentList extends Component {
  render() {
    const { postId, comments } = this.props;

    return (
      <div className="post__comments">
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}

        <CreateComment postId={postId} />
      </div>
    );
  }
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
