import React, { useState } from 'react';

const AddTodo = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Title and Description is Required!');
    } else {
      props.addTodo(title, description);
      setTitle('');
      setDescription('');
    }
  };
  return (
    <form className="container" onSubmit={submit}>
      <h3 className="text-center">Add Todo</h3>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); }} className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">description</label>
        <input type="text" value={description} onChange={(e) => { setDescription(e.target.value); }} className="form-control" id="description" />
      </div>
      <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
    </form>
  );
};

export default AddTodo;
