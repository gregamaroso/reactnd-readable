import React, { Component } from 'react';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';

export default class Categories extends Component {
  render() {
    const { categories, isLoading, hasErrored } = this.props;

    if (isLoading) {
      return <Loading delay={200} type='spin' color='#222' className='loading' />
    }

    if (hasErrored) {
      return `<p>You suck. Try again.</p>`;
    }

    return (
      <div>
        <div className="breadcrumb">Home</div>

        <ul>
          {categories.map((category) => (
          <li key={category.path}>
            <Link to={'/category/' + category.path}>{category.name}</Link> (3 posts)
          </li>
          ))}
        </ul>
      </div>
    )
  }
}
