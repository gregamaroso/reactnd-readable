import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumb from './Breadcrumb';

export default class Post extends Component {
  render() {
    return (
      <div>
        <p>Add breadcrumb here</p>
        <div className="breadcrumb"><Link to="/">Home</Link> &raquo; <Link to="/category/foo">[ category linked ]</Link> &raquo; [ post name ]</div>

        <p>Add the initial post text here. Add the initial post text here. Add the initial post text here. Add the initial post text here. Add the initial post text here.</p>
        <ul>
          <li>Comment #1 (vote: up | down)
            <ul>
              <li>Sub Comment #1 (vote: up | down)</li>
              <li>Sub Comment #2 (vote: up | down)</li>
            </ul>
          </li>
          <li>Comment #2 (vote: up | down)</li>
          <li>Comment #3 (vote: up | down)
            <ul>
              <li>Sub Comment #1 (vote: up | down)</li>
              <li>Sub Comment #2 (vote: up | down)</li>
            </ul>
          </li>
          <li>Comment #4 (vote: up | down)</li>
        </ul>
      </div>
    )
  }
}
