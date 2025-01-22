import React from 'react';
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem/TodoItem';
import TodoForm from './TodoForm';
import styles from './TodoList.module.scss';
import { PropsTodo } from '@/types/todo';
import classNames from 'classnames';

const TodoList = ({
  TODOS,
  removeTodo,
  changeFilter,
  changeChecked,
  handleClick,
  inputNameFormRef,
  filterName
}: PropsTodo) => {
  const [visibleTodo, setVisibleTodo] = React.useState(true);
  return (
    <div className={styles.relativeContainer}>
      <div className={classNames(styles.container)}>
        <TodoForm
          handleClick={handleClick}
          inputNameFormRef={inputNameFormRef}
          visibleTodo={visibleTodo}
          setVisibleTodo={setVisibleTodo}
        />
        <div className={`${styles.todoList} ${visibleTodo ? styles.slideDown : styles.slideUp}`}>
          {TODOS &&
            TODOS.map(i => (
              <TodoItem key={i.id} id={i.id} title={i.title} isDone={i.isDone} changeChecked={changeChecked} />
            ))}
        </div>

        <TodoFilter
          changeFilter={changeFilter}
          filterName={filterName}
          removeTodo={removeTodo}
          left={TODOS && TODOS.filter(obj => !obj.isDone).length}
        />
      </div>

      {TODOS &&
        TODOS?.length > 1 &&
        [...Array(TODOS.length - 1)].map((_, index) => (
          <div
            key={index}
            className={styles.stripe}
            style={{
              marginLeft: `${(index + 1) * 2}px`,
              marginRight: `${(index + 1) * 2}px`,
              zIndex: `-${index + 1}`
            }}
          ></div>
        ))}
    </div>
  );
};

export default TodoList;
