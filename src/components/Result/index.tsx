import clsx from 'clsx';

import { useAppSelector } from '../../hooks/redux';

import styles from './Result.module.scss';

export const Result = () => {
  const result = useAppSelector((state) => state.check.result);

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