import clsx from 'clsx';
import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import styles from './Result.module.scss';

const Results = () => {
  const result = useAppSelector((state) => state.check.result);
  console.log(result);

  return (
    <>
      <p className={styles.title}>Results</p>
      <p
        className={clsx(
          styles.result,
          result < 60 && styles.bad,
          result >= 60 && result < 80 && styles.good,
          result >= 80 && styles.excellent,
        )}>
        {result + '%'}
      </p>
    </>
  );
};

export default Results;
