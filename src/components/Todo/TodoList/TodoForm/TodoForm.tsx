import React from 'react';
import styles from './TodoForm.module.scss';

import { PropsTodo, RefObject } from '@/types/todo';

const TodoForm = ({ handleClick, inputNameFormRef }: PropsTodo) => {
  return (
    <div className={styles.form}>
      <form onSubmit={handleClick}>
        <input
          type='text'
          className={styles.input}
          placeholder='What needs to be done?'
          name='taskName'
          ref={inputNameFormRef}
        />
      </form>
    </div>
  );
};

export default TodoForm;
