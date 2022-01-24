import { ChakraProvider } from '@chakra-ui/react'

import { HandleRoute } from './route' 

function App() {
  return (
    <div className="App">
        <ChakraProvider>
           <HandleRoute />
        </ChakraProvider>
    </div>
  );
}

export default App;
