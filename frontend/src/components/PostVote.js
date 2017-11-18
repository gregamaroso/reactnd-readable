import React, { Component } from 'react';

export default class PostVote extends Component {
  handleVote = (id, dir) => {
    // dispatch to action creator
  }

  render() {
    const { post } = this.props;
    const { id, voteScore } = post;

    return (
      <div className="post__voting">
        Current Score: {voteScore}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="glyphicon glyphicon-thumbs-up" onClick={(e) => this.handleVote(id, 'up')} key="vote-up"></span>
        &nbsp;&nbsp;
        <span className="glyphicon glyphicon-thumbs-down" onClick={(e) => this.handleVote(id, 'down')} key="vote-down"></span>
      </div>
    );
  }
};
