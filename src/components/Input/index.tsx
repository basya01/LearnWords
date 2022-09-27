import React, { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string; 
}

const Input: FC<InputProps> = ( { className,...props } ) => {
  return (
    <input className={clsx(className, styles.root)} {...props} />
  );
};

export default Input;