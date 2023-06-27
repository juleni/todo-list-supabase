import {
  Box,
  ChakraProvider,
  Grid,
  Heading,
  HStack,
  Text,
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
      <Box fontSize="xl" borderWidth="4px" m="5" pb="10" borderRadius="lg">
        <Grid p={5}>
          <HStack>
            <Text
              w="100%"
              textAlign="right"
              color="gray.500"
              fontSize={{
                base: 'sm',
                sm: 'sm',
                lg: 'lg',
                xl: 'xl',
              }}
            >
              Powered by Chakra UI & Supabase
            </Text>
            <ColorModeSwitcher justifySelf="flex-end" />
          </HStack>
          <VStack spacing={2}>
            <Heading
              p="5"
              fontWeight="extrabold"
              size="xl"
              bgGradient="linear(to-l), teal.300, blue.500"
              color="blue.500"
            >
              TODO List SupaBASE
            </Heading>
            <AddTask />
            <TaskList />
          </VStack>
        </Grid>
        <Text
          w="100%"
          color="gray.400"
          pl="5"
          fontSize={{
            base: 'sm',
            sm: 'sm',
            lg: 'lg',
            xl: 'xl',
          }}
        >
          JULENI 2023 ... See my GitHub pages
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
