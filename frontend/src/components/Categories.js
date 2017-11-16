import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends Component {
  render() {
    return (
      <div>
        Show list of all categories here.
        <Link to="/category">Go to category</Link>
      </div>
    )
  }
}
