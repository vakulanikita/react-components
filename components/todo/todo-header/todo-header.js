import React from 'react';

const TodoHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default TodoHeader;
