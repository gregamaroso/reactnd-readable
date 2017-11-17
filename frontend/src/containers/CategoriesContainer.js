import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import Categories from '../components/Categories';
import { categoriesFetchData } from '../store/categories/actions';

class CategoriesContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { categories, isLoading, hasErrored } = this.props;
    return <Categories
      categories={categories}
      isLoading={isLoading}
      hasErrored={hasErrored}
    />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer));
