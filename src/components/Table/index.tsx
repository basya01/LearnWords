import { FC } from 'react';

import { Word } from '../../models/Word';

import styles from './Table.module.scss';

export const Table: FC<{ words: Word[] }> = ({ words }) => {
  return (
    <table className={styles.root}>
      <thead>
        <tr>
          <th>Foreign Words</th>
          <th>Translated</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <tr key={word.id}>
            <td>{word.foreign}</td>
            <td>{word.translated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};