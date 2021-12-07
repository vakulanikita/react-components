import {
  List,
  ListItem
} from '@chakra-ui/react'
import TodoListItem from './todo-list-item';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    
    return (
      <ListItem key={id}>
        <TodoListItem 
          {...itemProps }
          onDeleted={ () => onDeleted(id) }
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
        />
      </ListItem>
    );
  });

  return (
    <List>
      { elements }
    </List>
  );
};

export default TodoList;
