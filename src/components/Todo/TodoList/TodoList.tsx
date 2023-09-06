import React from 'react';
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem/TodoItem';
import TodoForm from './TodoForm';
import styles from './TodoList.module.scss';
import { PropsTodo } from '@/types/todo';

const TodoList = ({
  TODOS,
  removeTodo,
  changeFilter,
  changeChecked,
  handleClick,
  inputNameFormRef,
  filterName
}: PropsTodo) => {
  return (
    <div className={styles.container}>
      <TodoForm handleClick={handleClick} inputNameFormRef={inputNameFormRef} />
      {TODOS &&
        TODOS.map(i => (
          <TodoItem
            key={i.id}
            id={i.id}
            title={i.title}
            isDone={i.isDone}
            changeChecked={changeChecked}
          />
        ))}
      <TodoFilter
        changeFilter={changeFilter}
        filterName={filterName}
        removeTodo={removeTodo}
        left={TODOS && TODOS.filter(obj => !obj.isDone).length}
      />
    </div>
  );
};

export default TodoList;
