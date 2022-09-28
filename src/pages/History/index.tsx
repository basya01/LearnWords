import React from 'react';
import { useAppSelector } from '../../hooks/redux';

import styles from './History.module.scss';

const History = () => {
  const history = useAppSelector((state) => state.history);

  return (
    <>
      <p className={styles.title}>History</p>
      {history.length ? (
        <ul>
          {history.map((item) => (
            <li key={item.date} className={styles.item}>
              <p>{item.date}</p>
              <p>{item.result}%</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>History is empty</p>
      )}
    </>
  );
};

export default History;
