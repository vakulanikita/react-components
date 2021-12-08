import { ChakraProvider } from '@chakra-ui/react'
import { TodoProvider } from '../context/todo-context';
import theme from '../lib/theme';

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </TodoProvider>
  )
}

export default MyApp