// App.js

import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
