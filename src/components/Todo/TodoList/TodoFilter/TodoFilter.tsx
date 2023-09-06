import React from 'react';
import Button from '@/components/Button';
import itemstyles from '../TodoList.module.scss';

import { PropsTodo } from '@/types/todo';

const TodoFilter = ({ changeFilter, filterName, left, removeTodo }: PropsTodo) => {
  return (
    <div className={itemstyles.filter}>
      <p className={itemstyles.filter__left}>{left} items left</p>
      <div className={itemstyles.filter__btn}>
        <Button
          text={'All'}
          onClick={() => changeFilter && changeFilter('All')}
          filterName={filterName}
        />
        <Button
          text={'Active'}
          onClick={() => changeFilter && changeFilter('Active')}
          filterName={filterName}
        />
        <Button
          text={'Completed'}
          onClick={() => changeFilter && changeFilter('Completed')}
          filterName={filterName}
        />
      </div>

      <Button text={'Clear completed'} onClick={() => removeTodo && removeTodo()}></Button>
    </div>
  );
};

export default TodoFilter;
