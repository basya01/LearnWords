import React, { FC, forwardRef, InputHTMLAttributes, RefObject } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={clsx(className, styles.root)} {...props} />;
  },
);

export default Input;
