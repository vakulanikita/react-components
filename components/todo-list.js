import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    
    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          {...itemProps }
          onDeleted={ () => onDeleted(id) }
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
        />
      </li>
    );
  });

  return (
    <>
      <ul className="list-group todo-list">
        { elements }
      </ul>
      <style jsx>{`
        .todo-list .list-group-item {
          padding: .25rem .75rem;
        }
      `}</style>
    </>
  );
};

export default TodoList;
