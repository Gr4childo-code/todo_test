/**
 * @jest-environment jsdom
 */

import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '@/app/page';

test('Home', async () => {
  render(<Home />);

  await screen.findByRole('heading');
  expect(screen.getByRole('heading')).toHaveTextContent('todos');
});

test('add a new todo item', async () => {
  render(<Home />);

  const todoInput = screen.getByPlaceholderText('What needs to be done?');
  const testTodoText = 'Jest';

  fireEvent.change(todoInput, { target: { value: testTodoText } });
  fireEvent.submit(todoInput);

  const newTodo = screen.getByText(testTodoText);
  expect(newTodo).toBeInTheDocument();
});

test('toggles the todo completion state', async () => {
  render(<Home />);

  const todoInput = screen.getByPlaceholderText('What needs to be done?');
  const testTodoText = 'Test1';

  fireEvent.change(todoInput, { target: { value: testTodoText } });
  fireEvent.submit(todoInput);

  const newTodo = await screen.findByText(testTodoText);
  expect(newTodo).toBeInTheDocument();

  const todoItem = newTodo.closest('div');
  const checkbox = todoItem?.querySelector('input[type="checkbox"]');
  checkbox && fireEvent.click(checkbox);

  expect((todoInput.style.textDecoration = 'line-through'));
});
test('clears all completed todos', async () => {
  render(<Home />);
  const todoInput = screen.getByPlaceholderText('What needs to be done?');
  const testTodoText = 'TodoCompleted';

  fireEvent.change(todoInput, { target: { value: testTodoText } });
  fireEvent.submit(todoInput);

  const newTodo = await screen.findByText(testTodoText);
  expect(newTodo).toBeInTheDocument();

  const todoItem = newTodo.closest('div');
  const checkbox = todoItem?.querySelector('input[type="checkbox"]');
  checkbox && fireEvent.click(checkbox);

  fireEvent.click(screen.getByText('Clear completed'));

  const todos = screen.queryAllByText(testTodoText);
  expect(todos.length).toBe(0);

  expect(screen.getByText('1 items left')).toBeInTheDocument();
});
