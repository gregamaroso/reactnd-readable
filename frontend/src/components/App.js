import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from './Header';
import Footer from './Footer';
import CategoriesContainer from '../containers/CategoriesContainer';
import CategoryContainer from '../containers/CategoryContainer';
import PostContainer from '../containers/PostContainer';


import '../assets/layout.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <div className="app__content">
          <Route exact path="/" component={CategoriesContainer} />
          <Route path="/category/:category" component={CategoryContainer} />
          <Route path="/post" component={PostContainer} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
