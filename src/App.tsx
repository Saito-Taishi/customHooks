import React from 'react';
import './App.css';
import { ChakraProvider,VStack } from '@chakra-ui/react';
import { TextFieldBtn } from './TextFiedBtn';
import { useAddTextList } from './hooks';
import{TextList} from './TextList';

function App() {
  const hooks = useAddTextList();
  return (
    <ChakraProvider>
      <VStack>
        <TextFieldBtn />
        <TextList textList={hooks.textList}  />
      </VStack>
    </ChakraProvider>
  )
}

export default App;
