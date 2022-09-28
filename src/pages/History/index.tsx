import { useAppSelector } from '../../hooks/redux';

import styles from './History.module.scss';

const History = () => {
  const history = useAppSelector((state) => state.history);

  const avarage = history.reduce((sum, item) => sum + item.result, 0) / history.length;

  return (
    <>
      <p className={styles.title}>History</p>
      {history.length ? (
        <>
          <p className={styles.avarage}>Avarage: {Math.round(avarage)}%</p>
          <ul>
            {history.map((item) => (
              <li key={item.date} className={styles.item}>
                <p>{item.date}</p>
                <p>{Math.round(item.result)}%</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>History is empty</p>
      )}
    </>
  );
};

export default History;
