import React from 'react';
import { Link } from 'react-router-dom';

// Utils
import logo from '../assets/logo.svg';
import '../assets/header.css';

const Header = () => {
  return (
    <header className="app__header">
      <Link to="/">
        <img src={logo} className="app__header-logo" alt="logo" />
        <h1 className="app__header-title">React Readable</h1>
      </Link>
    </header>
  );
};

export default Header;
