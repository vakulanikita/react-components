import React, { useState, useContext } from 'react'

const TodoContext = React.createContext();

export function useTodoContext() {
  return useContext(TodoContext)
}

export function TodoProvider({ children }) {
  let maxId = 100;
  const [todoData, setTodoData] = useState([createTodoItem('Drink Coffee')])
  const [toDo, setToDo] = useState(0)
  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState('all')
  console.log(todoData);

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

  // filter создаёт новый массив
  // если у элемента done == true, элемент заносится в новый массив
  // length измеряет массив
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  const value = {
    doneCount,
    todoCount,
    addItem,
  }
  
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}