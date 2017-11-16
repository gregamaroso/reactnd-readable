import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Loading from 'react-loading'
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Categories extends Component {
  state = {
    categories: [],
    loadingCategories: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { loadingCategories } = this.state;

    return (
      <div>
        <p className="temp-description">This page will have a list of all categories, possibly ordered by last comment date.</p>

        <p>Home</p>
        <ul>
          <li><Link to="/category/foo">Category foo</Link> (3 posts)</li>
          <li><Link to="/category/bar">Category bar</Link> (100 posts)</li>
          <li><Link to="/category/acme">Category acme</Link> (54 posts)</li>
        </ul>

        {loadingCategories === true
          ? <Loading delay={200} type='spin' color='#222' className='loading' />
          : <p>Blah</p>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loadingCategories: false,
    categories: state.categories
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions,
)(Categories));
