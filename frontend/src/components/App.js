import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from './Header'
import Categories from './Categories'
import Category from './Category'
import Post from './Post'
import Footer from './Footer'

import '../assets/layout.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <div className="app__content">
          <Route exact path="/" render={() => (
            <Categories />
          )} />

          <Route path="/category" render={() => (
            <Category />
          )} />

          <Route path="/post" render={() => (
            <Post />
          )} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
