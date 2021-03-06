import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
import CreatePost from '../components/CreatePost';
import PostsContainer from '../containers/PostsContainer';
import PostContainer from '../containers/PostContainer';

import '../assets/layout.css';
import '../assets/typography.css';

class App extends Component {
  componentDidMount() {
    // Fetch all categories and posts when the app mounts, then add the data to the store.
    const { categories, posts } = this.props;

    if (!categories.allIds.length || !posts.allIds.length) {
      this.props.fetchData();
    }
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
            <Switch>
              <Route exact path="/"                  component={PostsContainer} />
              <Route exact path="/create-post"       component={CreatePost} />
              <Route exact path="/:category"         component={PostsContainer} />
              <Route exact path="/:category/:postid" component={PostContainer} />
            </Switch>
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts,
    hasErrored: (state.categoriesHasErrored || state.postsHasErrored),
    isLoading: (state.categoriesAreLoading || state.postsAreLoading),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      API.getCategoriesAndPosts()
        .then((res) => {
          const { posts, categories } = res;

          // Instead of dispatching to an action creator, I should just skip the middleman
          // and dispatch directly to the action.
          dispatch(categoriesFetchData(categories));
          dispatch(postsFetchData(posts));
        })
        .catch((err) => {
          // Handle error?
        });
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
