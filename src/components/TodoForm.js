
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoActions';

const TodoForm = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a new todo"
        className="todo-input"
      />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
