import { Input } from '@chakra-ui/react'
import { useTodoContext } from '../context/todo-context';

export default function SearchPanel() {

  const {term, setTerm} = useTodoContext();

  return (
    <Input 
      flexGrow="1"
      mr="1"
      w="auto"
      bg="white"
      type="text"
      placeholder="type to search"
      onChange={e => {setTerm(e.target.value)}}
      value={term}
    />
  )
};