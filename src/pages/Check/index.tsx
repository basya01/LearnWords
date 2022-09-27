import React, { useState } from 'react';
import Button from '../../components/Button';
import ChoiceWords from '../../components/ChoiceWords';
import Select from '../../components/Select';
import { useAppSelector } from '../../hooks/redux';
import { Word } from '../../models/Word';
import styles from './Check.module.scss';
import { GameStatus } from '../../redux/slices/check';

const Check = () => {
  const status = useAppSelector(state => state.check.status);

  switch (status) {
    case GameStatus.CHOICE:
      return <ChoiceWords />
    case GameStatus.CHECK:
      return (
        <>
          <p>Яблоко</p>
        </>
      );
    default:
      return <></>;
  }
};

export default Check;
