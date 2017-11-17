import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';

import { categoriesFetchData } from '../store/Categories/actions';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { isLoading, hasErrored, categories } = this.props;

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

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    hasErrored: state.categoriesHasErrored,
    isLoading: state.categoriesAreLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(categoriesFetchData())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));
