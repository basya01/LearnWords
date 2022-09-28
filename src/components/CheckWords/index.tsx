import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Word } from '../../models/Word';
import { cleanWords, GameStatus, setStatus, setTotalResult } from '../../redux/slices/check';
import { addHistory } from '../../redux/slices/history';
import { addRandomWords } from '../../utils/addRandomWords';
import { getTime } from '../../utils/getTime';
import Button from '../Button';

import styles from './CheckWords.module.scss';

const CheckWords = () => {
  const dictionary = useAppSelector((state) => state.dictionary);
  const selectedWords = useAppSelector((state) => state.check.words)
  const [index, setIndex] = useState(0);
  const correctAnswers = useRef(0);
  const navigate = useNavigate();

  const randomWords = addRandomWords(dictionary, selectedWords[index]);

  const dispatch = useAppDispatch();

  const onClickButton = (word: Word) => {
    if(selectedWords[index].id === word.id) {
      correctAnswers.current++;
    }
    if (index === selectedWords.length - 1) {
      const result = correctAnswers.current / selectedWords.length * 100;

      navigate('/result');

      dispatch(setTotalResult(result));
      dispatch(addHistory({result, date: getTime(new Date())}));
      dispatch(setStatus(GameStatus.CHOICE));
      dispatch(cleanWords());
    }

    setIndex(index + 1);
  };

  return (
    <>
      <p className={styles.foreign}>{selectedWords[index].translated}</p>
      <div className={styles.options}>
        {randomWords.map((word) => (
          <Button key={word.id} onClick={() => onClickButton(word)}>
            {word.foreign}
          </Button>
        ))}
      </div>
    </>
  );
};

export default CheckWords;
