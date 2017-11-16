import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
  render() {
    return (
      <div>
        <p class="temp-description">This page will contain the initial post text, following by a list of threaded comments.</p>

        <p><Link to="/">Home</Link> &raquo; <Link to="/category/foo">[ category linked ]</Link> &raquo; [ post name ]</p>
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
