import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react'
import theme from './styles/theme'
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <ChakraBaseProvider theme={theme}>
        <div></div>
      </ChakraBaseProvider>
    </ChakraProvider>
  )
}

export default App
