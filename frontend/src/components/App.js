import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Loading from 'react-loading'

// App initialization
import API from '../util/api';
import { categoriesFetchData } from '../store/categories/actions';
import { postsFetchData } from '../store/posts/actions';

// Components
import Error from './Error';
import Header from './Header';
import Footer from './Footer';
import PostsContainer from '../containers/PostsContainer';
import PostContainer from '../containers/PostContainer';

import '../assets/layout.css';
import '../assets/typography.css';

class App extends Component {
  componentDidMount() {
    // Fetch all categories and posts when the app mounts, then add the data to the store.
    this.props.fetchData();
  }

  render() {
    const { isLoading, hasErrored } = this.props;

    return (
      <div className="app">
        <Header />

        {isLoading && (
          <Loading delay={200} type='spin' color='#222' className='loading' />
        )}

        {hasErrored && (
          <Error message="There's been an error." />
        )}

        {!isLoading && !hasErrored && (
          <div className="app__content">
            <Route exact path="/"                  component={PostsContainer} />
            <Route exact path="/:category"         component={PostsContainer} />
            <Route       path="/:category/:postid" component={PostContainer} />
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hasErrored: (state.categoriesHasErrored || state.postsHasErrored),
    isLoading: (state.categoriesAreLoading || state.postsAreLoading),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      // Since this is a combo query for categories and posts,
      // it doesn't make sense to make and action creator. So
      // insteaded we'll just run the dispatch directly here.
      API.getCategoriesAndPosts()
        .then((res) => {
          dispatch(categoriesFetchData());
          dispatch(postsFetchData());
        })
        .catch((err) => {
          // Handle error?
        });
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
