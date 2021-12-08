import { useState } from 'react';
import {
  Input,
  Button,
  Flex,
  Box
} from '@chakra-ui/react'
import { useTodoContext } from '../context/todo-context';

export default function ItemAddForm() {

  const [label, setLabel] = useState('')
  const { addItem } = useTodoContext()

  function onSubmit(e) {
    e.preventDefault();
    addItem(label);
    setLabel('')
  }

  return (
    <Box mt="15px">
      <form onSubmit={onSubmit}>
        {/* Добавление value={label} сделало input controlled elem
            Также, когда React устанавливает value, это не приводит к onChange
            onChange() обновляет state, а state обновляет value */}
        <Flex>
          <Input
            className="form-control" 
            type="text"
            bg="white"
            w="auto"
            flexGrow="1"
            mr="1"
            placeholder="What needs to be done"
            onChange={e => setLabel(e.target.value)}
            value={label}
          />
          <Button
            type="submit"
            className="btn btn-outline-secondary"
            colorScheme="purple"
            variant="outline"
          >
            Add Item
          </Button>
        </Flex>
      </form>
    </Box>
  )
}
