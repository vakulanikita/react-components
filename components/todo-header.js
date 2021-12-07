import React from 'react';

const TodoHeader = ({toDo, done}) => {
  return (
    <>
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
    <style jsx>{`
      .app-header {
        align-items: flex-end;
      }

      .app-header h1 {
        flex-grow: 1;
      }

      .app-header h2 {
        font-size: 1.2rem;
        color: grey;
      }
    `}</style>
    </>
  );
};

export default TodoHeader;
