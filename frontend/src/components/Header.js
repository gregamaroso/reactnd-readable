import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { getAllCategories } from '../selectors/categories';
import bike from '../assets/icon_bike_off.png';
import '../assets/header.css';

class Header extends Component {
  render() {
    const { categories } = this.props;

    return (
      <header className="app__header clearfix">
        <div className="app__content">
          <h1 className="app__header-title"><Link to="/"><img src={bike} alt="Home" /></Link></h1>

          <div className="app__header-nav">
            {categories.map((c) => {
              const uri = '/' + c.path;
              return <Link key={uri} to={uri}>{c.name}</Link>
            })}
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: getAllCategories(state.categories)
  };
}

export default connect(mapStateToProps)(Header);
