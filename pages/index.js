import { useState, Component } from 'react';

import {
  Container,
  Box,
  Flex
} from '@chakra-ui/react'

import TodoHeader from '../components/todo-header';
import SearchPanel from '../components/search-panel';
import TodoList from '../components/todo-list';
import ItemStatusFilter from '../components/item-status-filter';
import ItemAddForm from '../components/item-add-form';


export default class App extends Component  {

  maxId = 100;

  state = {
    // этот массив должен подтягиваться с сервера со своими key ключами
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a great day'),
    ],
    term: '',
    filter: 'all', // active, all, done
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    }
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArray
      }
    })
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

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    // 1. update object
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]}; // избежали изменения state напрямую

    // 2. construct and return new array
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term }) // аналогично {term: term}
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  filter(items, filter) {
    // switch-блок, тк может быть 3(три!) разных фильтра
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    } 
  }

  render () {
    // todoData = this.state.todoData
    const { todoData, term, filter } = this.state;
    // отображать элементы по term и filter
    const visibleItems = this.filter(this.search(todoData, term), filter);
    // filter создаёт новый массив
    // если у элемента done == true, элемент заносится в новый массив
    // length измеряет массив
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <Container maxW="md">

        <Box my={8}>
          <TodoHeader toDo={todoCount} done={doneCount} />

          <Flex my={4}>
            <SearchPanel onSearchChange={ this.onSearchChange }/>
            <ItemStatusFilter 
            filter={ filter }
            onFilterChange={this.onFilterChange} />
          </Flex>

          <TodoList
            // до реализации поиска передавалось todoData
            todos={visibleItems}
            term={this.state.term}
            onDeleted={ this.deleteItem }
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />

          <ItemAddForm onItemAdded={ this.addItem } />
        </Box>
        
      </Container>
    )
  }
}