import React, { FC, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={clsx(className, styles.root)} {...props}>
      {children}
    </button>
  );
};

export default Button;
