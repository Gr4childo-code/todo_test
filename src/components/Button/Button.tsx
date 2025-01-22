import React from 'react';
import styles from './Button.module.scss';

import { PropsButton } from '@/types/todo';

const Button = ({ children, filterName, ...props }: PropsButton) => {
  return (
    <>
      <button className={children == filterName ? styles.button + ' ' + styles.active : styles.button} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;
