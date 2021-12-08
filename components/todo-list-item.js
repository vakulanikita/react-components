import {
  IconButton,
  Text,
  Flex
} from '@chakra-ui/react'
import { DeleteIcon, WarningIcon } from '@chakra-ui/icons'
import { Component } from 'react';

export default class TodoListItem extends Component {

  render() {
    // деструктуризация пропсов в классовом компоненте
    const { label, onDeleted, onToggleImportant, onToggleDone,
            important, done } = this.props;
  
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
          onClick={onToggleDone}
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
            onClick={onToggleImportant}
          />
          <IconButton
            size="sm"
            icon={<DeleteIcon />}
            colorScheme="red"
            variant="outline"
            onClick={onDeleted}
          />
        </Flex>

      </Flex>
    );
  };
}
