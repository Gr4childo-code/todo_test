import React, { useRef, useState } from 'react';

import styles from './Todo.module.scss';
import TodoList from './TodoList';

import { Todo, FilterValueType, RefObject } from '@/types/todo';

const Todo = () => {
  const [tasks, setTask] = useState<Todo[] | null>(null);
  const [filter, setFilter] = useState<FilterValueType>('All');
  const inputNameFormRef = useRef<HTMLInputElement>(null);
  const getNewId = () => Date.now().toString();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (inputNameFormRef.current !== null) {
      const newTask = { id: getNewId(), title: inputNameFormRef.current.value, isDone: false };
      if (tasks === null) {
        setTask([newTask]);
        inputNameFormRef.current.value = '';
      } else {
        setTask([...tasks, newTask]);
        inputNameFormRef.current.value = '';
      }
    }
  };

  const removeTodo = (): void => {
    setTask(prev => prev && prev.filter((todo: { isDone: boolean }) => todo.isDone == false));
  };
  const changeChecked = (id: string): void => {
    setTask(
      prev =>
        prev && prev.map(todo => (todo.id == id ? { ...todo, isDone: !todo.isDone } : { ...todo }))
    );
  };

  const changeFilter = (value: FilterValueType) => {
    setFilter(value);
  };
  let taskForTodoList = tasks;
  if (tasks) {
    if (filter === 'Completed') {
      taskForTodoList = tasks.filter((t: { isDone: boolean }) => t.isDone === true);
    } else if (filter === 'Active') {
      taskForTodoList = tasks.filter((t: { isDone: boolean }) => t.isDone === false);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>todos</h1>
      <TodoList
        TODOS={taskForTodoList}
        removeTodo={removeTodo}
        changeFilter={changeFilter}
        changeChecked={changeChecked}
        handleClick={handleClick}
        inputNameFormRef={inputNameFormRef}
        filterName={filter}
      />
    </div>
  );
};

export default Todo;
