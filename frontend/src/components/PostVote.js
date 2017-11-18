import React, { Component } from 'react';

export default class PostVote extends Component {
  render() {
    const { score } = this.props;

    return (
      <div className="post__voting">
        Current Score: {score}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span className="glyphicon glyphicon-thumbs-up"></span></a>
        &nbsp;&nbsp;
        <a href="#"><span className="glyphicon glyphicon-thumbs-down"></span></a>
      </div>
    );
  }
};
