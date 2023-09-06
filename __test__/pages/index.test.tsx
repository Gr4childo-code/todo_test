/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: 'todos'
    });

    expect(heading).toBeInTheDocument();
  });

  it('add new todo', () => {
    render(<Home />);
    const todoInput = screen.getByPlaceholderText('What needs to be done?');
    const testTodoText = 'Jest';
    fireEvent.change(todoInput, { target: { value: testTodoText } });
    expect(todoInput.value).toBe(testTodoText);
    fireEvent.submit(todoInput);
    const newTodo = screen.getByText(testTodoText);
    expect(newTodo).toBeInTheDocument();
  });
  it('click to checkbox', () => {
    render(<Home />);
    const todoInput = screen.getByPlaceholderText('What needs to be done?');
    const testTodoText = 'Jest';
    fireEvent.change(todoInput, { target: { value: testTodoText } });
    expect(todoInput.value).toBe(testTodoText);
    fireEvent.submit(todoInput);
    const newTodo = screen.getByText(testTodoText);
    expect(newTodo).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect((todoInput.style.textDecoration = 'line-through'));
  });
  it('Clear all complete', () => {
    render(<Home />);
    const todoInput = screen.getByPlaceholderText('What needs to be done?');
    const testTodoText = 'Jest';
    fireEvent.change(todoInput, { target: { value: testTodoText } });
    expect(todoInput.value).toBe(testTodoText);
    fireEvent.submit(todoInput);
    const newTodo = screen.getByText(testTodoText);
    expect(newTodo).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    // const clearTodo = screen.getAllByText('Clear completed');
    fireEvent.click(screen.getByText('Clear completed'));
    expect(screen.getByText('0 items left'));
  });
});
