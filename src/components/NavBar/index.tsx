import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.root}>
      <h1>LearnWords</h1>
      <ul>
        <Link to="/">
          <li>Dictionary</li>
        </Link>
        <Link to="/add">
          <li>Add word</li>
        </Link>
        <Link to="/check">
          <li>Check words</li>
        </Link>
        <Link to="/history">
          <li>History</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
