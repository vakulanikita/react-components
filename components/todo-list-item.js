import React from 'react';
import { Component } from 'react';

export default class TodoListItem extends Component {

  render() {
    // деструктуризация пропсов в классовом компоненте
    const { label, onDeleted, onToggleImportant, onToggleDone,
            important, done } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }
  
    return (
      <>
        <span className={classNames}>
          <span
            className="todo-list-item-label"
            onClick={onToggleDone}>
            {label}
          </span>
    
          <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
            <i className="fa fa-exclamation" />
            important
          </button>
    
          <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted}>
            <i className="fa fa-trash-o" />
            del
          </button>
        </span>
        <style jsx>{`
          .todo-list-item {
            font-size: 1.25rem;
          }

          .todo-list-item button {
            /* width: 35px; */
            margin: 3px;
          }

          .todo-list-item-label {
            margin-left: 1.25rem;
            line-height: 35px;
            cursor: pointer;
            user-select: none;
          }

          .todo-list-item.done .todo-list-item-label {
            text-decoration: line-through;
          }

          .todo-list-item.important .todo-list-item-label {
            font-weight: bold;
            color: steelblue;
          }
        `}</style>
      </>
    );
  };
}
