import React from 'react';
import styles from './TodoItem.module.scss';

const TodoItem = ({
  title,
  id,
  isDone,
  changeChecked
}: {
  title: string;
  id: string;
  isDone: boolean;
  changeChecked: ((id: string) => void) | undefined;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.round_checkbox}>
        <input
          type='checkbox'
          id={id}
          checked={isDone}
          onChange={(): void => {
            changeChecked && changeChecked(id);
          }}
        />
        <label htmlFor={id}></label>
      </div>
      <p className={isDone ? `${styles.title} ${styles.dashed}` : styles.title}>{title}</p>
    </div>
  );
};

export default TodoItem;
