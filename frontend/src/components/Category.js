import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Category extends Component {
  render() {
    return (
      <div>
        <p className="temp-description">This page will have a list of all posts for a single cateogry along with some metadata for each.</p>

        <p><Link to="/">Home</Link> &raquo; [ category ]</p>
        <ul>
          <li><Link to="/post/1">Post 1</Link> (1024 comments, last comment 12/1/2016)</li>
          <li><Link to="/post/2">Post 2</Link> (856 comments, last comment 2/17/2017)</li>
          <li><Link to="/post/3">Post 3</Link> (200 comments, last comment 4/20/2017)</li>
        </ul>
      </div>
    )
  }
}
