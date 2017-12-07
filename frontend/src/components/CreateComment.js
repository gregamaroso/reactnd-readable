import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { createComment } from '../store/comments/actions';

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleCreateComment(this.refs);
    this.refs.form.reset();  // reset form elements
  }

  render() {
    return (
      <div className="comment__create">
        <form method="post" onSubmit={this.handleSubmit} ref="form">
          <div className="form__item">
            <label>Author</label>
            <input type="textfield" name="author" ref="author" />
          </div>

          <div className="form__item">
            <label>Body</label>
            <textarea name="body" ref="body"></textarea>
          </div>

          <div className="form__item">
            <input type="submit" name="submit" value="Create" />
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleCreateComment: (refs) => {
      const getValue = (k) => {
        return refs[k].value;
      }

      const post = {
        postId: ownProps.postId,
        body: getValue('body'),
        author: getValue('author'),
      };

      dispatch(createComment(post));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateComment));
