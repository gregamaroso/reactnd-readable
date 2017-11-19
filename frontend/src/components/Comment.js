import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { RIETextArea } from 'riek';
import _ from 'lodash';

import { updateComment } from '../store/comments/actions';
import CommentVote from './CommentVote';
import { transformEpochToDate } from '../util/helpers';

class Comment extends Component {
  constructor(props) {
     super(props);
     this.state = {commentId: props.comment.id};
  }

  render() {
    const { comment, handleUpdateComment } = this.props;
    const { id, body, author, timestamp, voteScore } = comment;
    const date = transformEpochToDate(timestamp);

    return (
      <div className="post__comment clearfix">
        <div className="post__comment-body editable">
          {body && (
            <RIETextArea
              value={body}
              change={handleUpdateComment}
              propName='body'
              validate={_.isString}
              className="fullwidth minheight--200" />
          )}
        </div>

        <div className="post__comment-meta">
          <div className="post__comment-meta-author">
            {author}
          </div>

          <div className="post__comment-meta-date">
            {date}
          </div>

          <CommentVote commentId={id} voteScore={voteScore} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleUpdateComment: (changes) => dispatch(updateComment(ownProps.comment, changes)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment));
