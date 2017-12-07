import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
// import Loading from 'react-loading'
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { RIEInput, RIETextArea } from 'riek';
// import _ from 'lodash';

import { getAllCategories } from '../selectors/categories';
import { createPost } from '../store/posts/actions';
// import Breadcrumb from './Breadcrumb';
// import Error from './Error';
// import CommentList from './CommentList';
// import PostVote from './PostVote';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleCreatePost(this.refs);
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="post__create">
        <form method="post" onSubmit={this.handleSubmit}>
          <div className="form__item">
            <label>Title</label>
            <input type="textfield" name="title" ref="title" />
          </div>

          <div className="form__item">
            <label>Category</label>
            <select name="category" ref="category">
              {categories.map(cat => (
                <option key={cat.path} value={cat.path}>{cat.name}</option>
              ))}
            </select>
          </div>

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

/*
Post.propTypes = {
  isLoading:  PropTypes.bool.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  category:   PropTypes.object.isRequired,
  post:       PropTypes.object.isRequired,
  comments:   PropTypes.array.isRequired,
};
*/

function mapStateToProps(state) {
  return {
    categories: getAllCategories(state.categories)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleCreatePost: (refs) => {
      const getValue = (k) => {
        return refs[k].value;
      }

      const post = {
        title: getValue('title'),
        category: getValue('category'),
        author: getValue('author'),
        body: getValue('body'),
      };

      dispatch(createPost(post));

      // Go back to the homepage
      ownProps.history.push('/');
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));
