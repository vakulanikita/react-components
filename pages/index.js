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

  state = {
    term: ''
  }

  onSearchChange = (term) => {
    this.setState({ term }) // аналогично {term: term}
  }

  render () {

    return (
      <Container maxW="md">

        <Box my={8}>
          <TodoHeader />

          <Flex my={4}>
            <SearchPanel onSearchChange={ this.onSearchChange }/>
            <ItemStatusFilter />
          </Flex>

          <TodoList />

          <ItemAddForm />
        </Box>
        
      </Container>
    )
  }
}