import React, { Component } from 'react';

export default class CommentVote extends Component {
  handleVote = (id, dir) => {
    // dispatch to action creator
  }

  render() {
    const { commentId, voteScore } = this.props;

    return (
      <div className="post__voting">
        Current Score: {voteScore}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="glyphicon glyphicon-thumbs-up" onClick={(e) => this.handleVote(commentId, 'up')} key="vote-up"></span>
        &nbsp;&nbsp;
        <span className="glyphicon glyphicon-thumbs-down" onClick={(e) => this.handleVote(commentId, 'down')} key="vote-down"></span>
      </div>
    );
  }
};
