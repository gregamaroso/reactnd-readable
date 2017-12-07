import React from 'react';
import { Link } from 'react-router-dom';

// Utils
// import logo from '../assets/logo.svg';
import '../assets/header.css';

const Header = () => {
  return (
    <header className="app__header">
      <Link to="/">
        <h1 className="app__header-title">Greg Amaroso's Readable Project</h1>
      </Link>
    </header>
  );
};

export default Header;
