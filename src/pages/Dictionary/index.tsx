import React from 'react';
import Table from '../../components/Table';
import { useAppSelector } from '../../hooks/redux';

import styles from './Dictionary.module.scss';

const Dictionary = () => {
  const words = useAppSelector((state) => state.dictionary);

  return (
    <>
      <h2 className={styles.title}>Dictionary</h2>
      {!words.length ? <p>At the moment there is no any words</p> : <Table words={words} />}
    </>
  );
};

export default Dictionary;
