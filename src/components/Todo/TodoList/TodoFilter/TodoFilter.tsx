import React from 'react';
import Button from '@/components/Button';
import itemstyles from '../TodoList.module.scss';

import { PropsTodo } from '@/types/todo';

const TodoFilter = ({ changeFilter, filterName, left, removeTodo }: PropsTodo) => {
  return (
    <div className={itemstyles.filter}>
      <div className={itemstyles.filter__left}>{((left && left >= 0) || !left) && <span> {left} items left</span>}</div>

      <div className={itemstyles.filter__btn}>
        <Button onClick={() => changeFilter && changeFilter('All')} filterName={filterName}>
          All
        </Button>
        <Button onClick={() => changeFilter && changeFilter('Active')} filterName={filterName}>
          Active
        </Button>
        <Button onClick={() => changeFilter && changeFilter('Completed')} filterName={filterName}>
          Completed
        </Button>
      </div>

      <Button onClick={() => removeTodo && removeTodo()}>Clear completed</Button>
    </div>
  );
};

export default TodoFilter;
