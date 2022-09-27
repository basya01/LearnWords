import React, { FormEvent, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAppDispatch } from '../../hooks/redux';
import { addWord } from '../../redux/slices/dictionary';
import styles from './Add.module.scss';

const Add = () => {
  const [word, setWord] = useState({ foreign: '', translated: '' });
  const dispatch = useAppDispatch();

  const onSubmitAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (word.foreign && word.translated) {
      dispatch(addWord({ id: Date.now(), ...word }));
      setWord({ foreign: '', translated: '' });
    } else {
      alert('Fill both areas');
    }
  };

  return (
    <>
      <h2 className={styles.title}>Add word</h2>
      <form action="" onSubmit={(e) => onSubmitAdd(e)}>
        <p className={styles.label}>Foreign</p>
        <Input
          value={word.foreign}
          name="foreign"
          onChange={(e) => setWord(({ translated }) => ({ foreign: e.target.value, translated }))}
        />
        <p className={styles.label}>Translated</p>
        <Input
          value={word.translated}
          name="translated"
          onChange={(e) => setWord(({ foreign }) => ({ foreign, translated: e.target.value }))}
        />
        <Button name="add" className={styles.button}>
          Add
        </Button>
      </form>
    </>
  );
};

export default Add;
