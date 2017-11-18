import React, { Component } from 'react';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';

import Breadcrumb from './Breadcrumb';

export default class Posts extends Component {
  render() {
    const { isLoading, hasErrored, posts, category, showCategoryBreadcrumb } = this.props;

    if (isLoading) {
      return <Loading delay={200} type='spin' color='#222' className='loading' />
    }

    if (hasErrored) {
      return `<p>You suck. Try again.</p>`;
    }

    let breadcrumbItems = [];
    if (showCategoryBreadcrumb) {
      breadcrumbItems.push(<Link to="/">Home</Link>);
      breadcrumbItems.push(category.name);
    }

    return (
      <div>
        {showCategoryBreadcrumb && (<Breadcrumb breadcrumb={breadcrumbItems} />)}

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
