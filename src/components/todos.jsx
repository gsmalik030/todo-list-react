import React from 'react';
import Todo from './todo';

const Todos = (props) => (
  <div className="container">
    <h2 className="text-center">Todos List</h2>
    {props.todos.length === 0 ? 'No Todos to Display' : props.todos.map((todo) => <Todo onDelete={props.onDelete} todo={todo} key={todo.sn} />)}
  </div>
);

export default Todos;
