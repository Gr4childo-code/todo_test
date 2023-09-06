import React from 'react';
import styles from './Button.module.scss';

import { PropsButton } from '@/types/todo';

const Button = ({ text, filterName, ...props }: PropsButton) => {
  return (
    <>
      <button
        className={text == filterName ? styles.button + ' ' + styles.active : styles.button}
        {...props}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
