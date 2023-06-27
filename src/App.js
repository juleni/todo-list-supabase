import {
  Box,
  ChakraProvider,
  Grid,
  Heading,
  theme,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={5}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={2} minH="100vh">
            <Heading
              mt="5"
              p="5"
              fontWeight="extrabold"
              size="xl"
              bgGradient="linear(to-l), teal.300, blue.500"
              bgClip="text"
            >
              TODO List
            </Heading>
            <AddTask />
            <TaskList />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
