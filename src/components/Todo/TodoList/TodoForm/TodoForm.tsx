import React from 'react';
import styles from './TodoForm.module.scss';

import { PropsTodoForm } from '@/types/todo';
import ArrowIcon from '@/components/Arrow/ArrowIcon';

const TodoForm = ({ handleClick, inputNameFormRef, visibleTodo, setVisibleTodo }: PropsTodoForm) => {
  return (
    <div className={styles.Form}>
      <ArrowIcon
        className={styles.arrow}
        style={{ transform: visibleTodo ? 'rotate(90deg)' : 'rotate(-90deg)' }}
        onClick={() => setVisibleTodo && setVisibleTodo(!visibleTodo)}
      />
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
