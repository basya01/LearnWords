import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Button, Select } from '../';
import { GameStatus, setStatus } from '../../redux/slices/check';

import styles from './ChoiceWords.module.scss';

export const ChoiceWords = () => {
  const selectedWords = useAppSelector((state) => state.check.words);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2 className={styles.title}>Check words</h2>
      <p>Select at least 10 words to begin</p>
      <div className={styles.buttons}>
        <Select />
        <Button
          onClick={() =>
            selectedWords.length === 10
              ? dispatch(setStatus(GameStatus.CHECK))
              : alert('Select 10 words')
          }>
          Start
        </Button>
      </div>
    </>
  );
};
