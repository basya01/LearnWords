import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import dictionary from '../../images/dictionary.svg';
import add from '../../images/add.svg';
import check from '../../images/check.svg';
import history from '../../images/add.svg';

const NavBar = () => {
  const [active, setActive] = useState(0);

  const elems = [
    { id: 0, name: 'Dictionary', icon: dictionary, to: '/' },
    { id: 1, name: 'Add word', icon: add, to: '/add' },
    { id: 2, name: 'Check words', icon: check, to: '/check' },
    { id: 3, name: 'History', icon: history, to: '/history' },
  ];

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.logo}>LearnWords</h1>
        <ul className={styles.list}>
          {elems.map((elem) => (
            <Link to={elem.to}>
              <li
                className={active === elem.id ? styles.active : ''}
                onClick={() => setActive(elem.id)}>
                <img src={elem.icon} alt="icon" />
                {elem.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
