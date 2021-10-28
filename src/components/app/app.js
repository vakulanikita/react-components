import TableHeader from '../table/table-header';
import TableList from '../table/table-list';
import TableFooter from '../table/table-footer';
import TodoHeader from '../todo/todo-header';
import SearchPanel from '../todo/search-panel';
import TodoList from '../todo/todo-list';
import ItemStatusFilter from '../todo/item-status-filter';

import './app.css';
import { Component } from 'react';

export default class App extends Component  {

  state = {
    // этот массив должен подтягиваться с сервера со своими key ключами
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a great day', important: false, id: 3 },
    ],
    tableData: [
      {name: 'Nikita Vakula', days: 6, salary: 30, id: 1},
      {name: 'Danil Zakharov', days: 15, salary: 5, id: 2},
      {name: 'Danil Buzin', days: 1, salary: 10, id: 3},
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      // формируется новый массив, чтобы не изменять при 
      // помощи splice старый - так делать в react нельзя
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      }
      
    });
  };

  render () {
    return (
      <>
        <div className="table-app d-none">
          <TableHeader />
          <TableList props={this.state.tableData} />
          <TableFooter />
        </div>

        <div className="todo-app">
          <TodoHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>

          <TodoList 
            todos={this.state.todoData} 
            onDeleted={ this.deleteItem }
            />
        </div>
      </>
    )
  }
}