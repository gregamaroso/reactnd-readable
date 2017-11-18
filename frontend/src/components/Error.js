import React, { Component } from 'react';

export default class Error extends Component {
  render() {
    const { message } = this.props;

    return (
      <div className="messages messages--error">
        {message}
      </div>
    );
  }
}
