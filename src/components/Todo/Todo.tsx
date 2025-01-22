import React, { useEffect, useRef, useState } from 'react';

import styles from './Todo.module.scss';
import TodoList from './TodoList';

import { Todo, FilterValueType } from '@/types/todo';

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
        localStorage.setItem('TODOS', JSON.stringify([newTask]));
      } else {
        setTask([...tasks, newTask]);
        inputNameFormRef.current.value = '';
        localStorage.setItem('TODOS', JSON.stringify([...tasks, newTask]));
      }
    }
  };

  const removeTodo = (): void => {
    localStorage.setItem(
      'TODOS',
      JSON.stringify(tasks && [...tasks.filter((todo: { isDone: boolean }) => todo.isDone == false)])
    );
    setTask(tasks && [...tasks.filter((todo: { isDone: boolean }) => todo.isDone == false)]);
  };
  const changeChecked = (id: string) => {
    localStorage.setItem(
      'TODOS',
      JSON.stringify(
        tasks && [...tasks.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : { ...todo }))]
      )
    );

    setTask(tasks && [...tasks.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : { ...todo }))]);
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

  useEffect(() => {
    if (localStorage) {
      const TODOS: Todo[] = localStorage.getItem('TODOS') ? JSON.parse(localStorage.getItem('TODOS')) : null;
      setTask(TODOS);
    }
  }, []);

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
