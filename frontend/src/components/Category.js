import React, { Component } from 'react';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';

export default class Category extends Component {
  render() {
    const { isLoading, hasErrored, posts, category } = this.props;

    if (isLoading) {
      return <Loading delay={200} type='spin' color='#222' className='loading' />
    }

    if (hasErrored) {
      return `<p>You suck. Try again.</p>`;
    }

    return (
      <div>
        <p className="temp-description">This page will have a list of all posts for a single cateogry along with some metadata for each.</p>

        <div className="breadcrumb"><Link to="/">Home</Link> &raquo; [ {category.name} ]</div>

        <ul>
          {posts.map((post) => (
          <li key={post.id}>
            <Link to={'/post/' + post.id}>{post.title}</Link> (1024 comments, last comment 12/1/2016)
          </li>
          ))}
        </ul>
      </div>
    );
  }
}
