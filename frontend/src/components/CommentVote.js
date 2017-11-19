import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { commentsHandleVote } from '../store/comments/actions';

class CommentVote extends Component {
  render() {
    const { commentId, voteScore } = this.props;

    return (
      <div className="post__voting">
        Score: {voteScore}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="glyphicon glyphicon-thumbs-up" onClick={(e) => this.props.handleVote(commentId, 'up')} key="vote-up"></span>
        &nbsp;&nbsp;
        <span className="glyphicon glyphicon-thumbs-down" onClick={(e) => this.props.handleVote(commentId, 'down')} key="vote-down"></span>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleVote: (id, dir) => dispatch(commentsHandleVote(id, dir))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentVote));
