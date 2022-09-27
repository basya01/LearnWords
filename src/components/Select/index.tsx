import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Select.module.scss';
import Button from '../Button';
import { Word } from '../../models/Word';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setWord } from '../../redux/slices/check';

interface SelectProps {
  className?: string;
}

const Select: FC<SelectProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dictionary = useAppSelector(state => state.dictionary);
  const {words: selectedWords, status } = useAppSelector(state => state.check )

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

export default Select;
