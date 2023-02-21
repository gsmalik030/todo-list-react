import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/header';
import Todos from './components/todos';
import AddTodo from './components/form';
function App() {

  let initTodo;
  if(localStorage.getItem('todos')=== null){
    initTodo =[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }

  const handleDelete= (todo)=>{
    setTodos(todos.filter( e =>{
      return e!==todo;
    }))
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const handleAddTodo=(title, description)=>{
    let sn = todos.length + 1;
    const newTodo = {
      sn,title,description
    }
    setTodos([...todos, newTodo])
  }
  const [todos,setTodos] =useState(initTodo)
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  return (
    <React.Fragment>
    <Header title={"Todos List"}/>
    <AddTodo addTodo= {handleAddTodo} />
    <Todos todos={todos} onDelete={handleDelete} />
    </React.Fragment>
  );
}

export default App;
