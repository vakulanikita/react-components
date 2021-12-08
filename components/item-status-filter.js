import {
  ButtonGroup,
  Button
} from '@chakra-ui/react'
import { useTodoContext } from '../context/todo-context';

export default function ItemStatusFilter() {

  const {filter, onFilterChange} = useTodoContext()

  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]

  const elements = buttons.map(({name, label}) => {
    const isActive = filter === name;
    const clazz = isActive ? 'solid' : 'outline';
    return (
      <Button
        _focus={{
          boxShadow: '0'
        }}
        colorScheme="purple"
        variant={clazz}
        key={name}
        onClick={() => onFilterChange(name)}
      >
      {label}
      </Button>
    )
  })

  return (
    <ButtonGroup spacing={0}>
      { elements }
    </ButtonGroup>
  );
}