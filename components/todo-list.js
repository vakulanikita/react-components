import {
  List,
  ListItem
} from '@chakra-ui/react'
import TodoListItem from './todo-list-item';
import { useTodoContext } from '../context/todo-context'

function TodoList() {
  const {visibleItems} = useTodoContext()

  const elements = visibleItems.map((item) => {
    return (
      <ListItem key={item.id}>
        {/* item = {id, label, important, done} */}
        <TodoListItem {...item} />
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
