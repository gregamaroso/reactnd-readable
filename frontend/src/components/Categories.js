import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends Component {
  render() {
    return (
      <div>
        <p class="temp-description">This page will have a list of all categories, possibly ordered by last comment date.</p>

        <p>Home</p>
        <ul>
          <li><Link to="/category/foo">Category foo</Link> (3 posts)</li>
          <li><Link to="/category/bar">Category bar</Link> (100 posts)</li>
          <li><Link to="/category/acme">Category acme</Link> (54 posts)</li>
        </ul>
      </div>
    )
  }
}
