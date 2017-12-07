import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { RIETextArea } from 'riek';
import _ from 'lodash';
import Confirm from 'react-confirm-bootstrap';

import { updateComment, removeComment } from '../store/comments/actions';
import CommentVote from './CommentVote';
import { transformEpochToDate } from '../util/helpers';

class Comment extends Component {
  render() {
    const { comment, handleUpdateComment, handleRemoveComment } = this.props;
    const { id, body, author, timestamp, voteScore } = comment;
    const date = transformEpochToDate(timestamp);

    return (
      <div className="post__comment clearfix">
        <div className="post__comment-body">
          <div className="editable">
            {body && (
              <RIETextArea
                value={body}
                change={handleUpdateComment}
                propName='body'
                validate={_.isString}
                className="fullwidth minheight--200" />
            )}
          </div>

          <Confirm
            onConfirm={handleRemoveComment}
            body="Are you sure you want to remove this comment?"
            confirmText="Yes"
            title="Remove Comment">
            <button className="button--remove">remove comment</button>
          </Confirm>
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
    handleRemoveComment: () => dispatch(removeComment(ownProps.comment.id)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment));
