import { FC, useState } from 'react';
import clsx from 'clsx';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setWord } from '../../redux/slices/check';
import { Button } from '../Button';

import styles from './Select.module.scss';

interface SelectProps {
  className?: string;
}

export const Select: FC<SelectProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dictionary = useAppSelector((state) => state.dictionary);
  const selectedWords = useAppSelector((state) => state.check).words;
  const dispatch = useAppDispatch();

  return (
    <div className={clsx(className, styles.root)}>
      <Button onClick={() => setIsOpen(!isOpen)}>Select</Button>
      {isOpen && (
        <ul className={styles.options}>
          {dictionary.map((word) => (
            <li
              onClick={() => dispatch(setWord(word))}
              className={clsx(
                styles.option,
                selectedWords.find((sWord) => sWord.id === word.id) && styles.active,
              )}
              key={word.id}>
              <p>{word.foreign}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
