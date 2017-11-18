import React, { Component } from 'react';

import CommentVote from './CommentVote';
import { transformEpochToDate } from '../util/helpers';

export default class Comment extends Component {
  render() {
    const { comment } = this.props;
    const { id, body, author, timestamp, voteScore } = comment;
    const date = transformEpochToDate(timestamp);

    return (
      <div className="post__comment clearfix">
        <div className="post__comment-body">
          {body}

          <CommentVote commentId={id} voteScore={voteScore} />
        </div>

        <div className="post__comment-meta">
          <div className="post__comment-meta-author">
            {author}
          </div>
          <div className="post__comment-meta-date">
            {date}
          </div>
        </div>
      </div>
    );
  }
};
