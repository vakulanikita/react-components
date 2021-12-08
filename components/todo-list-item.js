import {
  IconButton,
  Text,
  Flex
} from '@chakra-ui/react'
import { DeleteIcon, WarningIcon } from '@chakra-ui/icons'
import { useTodoContext } from '../context/todo-context';

export default function TodoListItem({ id, done, important, label }) {

  const {onDeleted, onToggleImportant, onToggleDone} = useTodoContext()

  return (
    <Flex
      fontSize="xl"
      justifyContent="space-between"
      alignItems="flex-start"
      bg="whiteAlpha.800"
      borderRadius={6}
      px={4}
      py={1}
      mb={2}
    >
      <Text
        as="span"
        textDecor={done ? "line-through" : "none"}
        color={important ? "green" : "inherit"}
        fontWeight={important ? "semibold" : "inherit"}
        lineHeight="shorter"
        cursor="pointer"
        onClick={() => {onToggleDone(id)}}
      >
        {label}
      </Text>

      <Flex flexWrap="nowrap">
        <IconButton
          size="sm"
          icon={<WarningIcon />}
          colorScheme="green"
          variant="outline"
          mr={1}
          onClick={() => {onToggleImportant(id)}}
        />
        <IconButton
          size="sm"
          icon={<DeleteIcon />}
          colorScheme="red"
          variant="outline"
          onClick={() => {onDeleted(id)}}
        />
      </Flex>

    </Flex>
  );
}
