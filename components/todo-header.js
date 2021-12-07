import {
  Flex,
  Heading
} from '@chakra-ui/react'

const TodoHeader = ({toDo, done}) => {
  return (
    <>
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Heading
          as="h1"
          flexFlow={1}
          lineHeight="shorter"
          fontWeight="bold"
        >
          Todo List
        </Heading>
        <Heading
          as="h2"
          fontSize="xl"
          color="gray.600"
          fontWeight="medium"
        >
          {toDo} more to do, {done} done
        </Heading>
      </Flex>
    </>
  );
};

export default TodoHeader;
