import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { postsHandleVote } from '../store/posts/actions';

class PostVote extends Component {
  render() {
    const { post } = this.props;
    const { id, voteScore } = post;

    return (
      <div className="post__voting">
        Current Score: {voteScore}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="glyphicon glyphicon-thumbs-up" onClick={(e) => this.props.handleVote(id, 'up')} key="vote-up"></span>
        &nbsp;&nbsp;
        <span className="glyphicon glyphicon-thumbs-down" onClick={(e) => this.props.handleVote(id, 'down')} key="vote-down"></span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleVote: (id, dir) => dispatch(postsHandleVote(id, dir))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostVote));
