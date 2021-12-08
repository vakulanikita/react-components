import React, { useState, useContext } from 'react'

const TodoContext = React.createContext();

export function useTodoContext() {
  return useContext(TodoContext)
}

let maxId = 100;

export function TodoProvider({ children }) {
  // этот массив должен подтягиваться с сервера со своими key ключами
  const [todoData, setTodoData] = useState([createTodoItem('Drink Coffee')])
  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState('all') // all, active, done
  // console.log(...todoData);

  function createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: maxId++,
    }
  }

  function addItem(label) {
    const newItem = createTodoItem(label);
    setTodoData([...todoData, newItem]);
  }

  function onSearchChange(newTerm) {
    setTerm(newTerm);
  }

  function todoSearch(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  function todoFilter(items, filter) {
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

  
  function toggleProperty(arr, id, propName) {
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

  function onDeleted(id) {
    const idx = todoData.findIndex((el) => el.id === id)
    const newArray = [
      ...todoData.slice(0, idx),
      ...todoData.slice(idx + 1)
    ];
    setTodoData(newArray);
  };

  function onToggleImportant(id) {
    setTodoData(toggleProperty(todoData, id, 'important'))
  };

  function onToggleDone(id) {
    setTodoData(toggleProperty(todoData, id, 'done'))
  };

  function onFilterChange(filter) {
    setFilter(filter)
  }

  // отображать элементы по term и filter
  const visibleItems = todoFilter(todoSearch(todoData, term), filter);

  // filter создаёт новый массив
  // если у элемента done == true, элемент заносится в новый массив
  // length измеряет массив
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  const value = {
    todoData,
    doneCount,
    todoCount,
    term,
    setTerm,
    visibleItems,
    onSearchChange,
    addItem,
    onDeleted,
    onToggleImportant,
    onToggleDone,
    filter,
    onFilterChange
  }
  
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}