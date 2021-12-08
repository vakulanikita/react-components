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

export default function App() {

  return (
    <Container maxW="md">

      <Box my={8}>
        <TodoHeader />

        <Flex my={4}>
          <SearchPanel/>
          <ItemStatusFilter />
        </Flex>

        <TodoList />

        <ItemAddForm />
      </Box>
      
    </Container>
  )
}