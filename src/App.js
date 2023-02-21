import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Todos from './components/todos';
import AddTodo from './components/form';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const [todos, setTodos] = useState(initTodo);

  const handleAddTodo = (title, description) => {
    const sn = todos.length + 1;
    const newTodo = {
      sn,
      title,
      description,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Header title="Todos List" />
      <AddTodo addTodo={handleAddTodo} />
      <Todos todos={todos} onDelete={handleDelete} />
    </>
  );
}

export default App;
