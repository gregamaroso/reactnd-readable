import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from './components/Header'
import Categories from './components/Categories'
import Category from './components/Category'
import Footer from './components/Footer'

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
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
