import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from './Header';
import Footer from './Footer';
import PostsContainer from '../containers/PostsContainer';
import PostContainer from '../containers/PostContainer';

import '../assets/layout.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <div className="app__content">
          <Route exact path="/"                component={PostsContainer} />
          <Route exact path="/:category"       component={PostsContainer} />
          <Route       path="/:category/:post" component={PostContainer} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
