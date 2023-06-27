import {
  Box,
  ChakraProvider,
  Grid,
  Heading,
  HStack,
  Link,
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
      <Box
        fontSize="xl"
        borderWidth="2px"
        boxShadow="xl"
        bor
        m="5"
        pb="5"
        borderRadius="lg"
      >
        <Grid p={5}>
          <HStack>
            <Text
              w="100%"
              textAlign="right"
              color="gray.500"
              textShadow="1px 1px #F8F6F4"
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
              textShadow="3px 3px lightgray"
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
          textAlign="center"
          w="100%"
          color="gray.400"
          textShadow="1px 1px #F8F6F4"
          pl="5"
          pt="4"
          fontSize={{
            base: 'xs',
            sm: 'sm',
            lg: 'lg',
            xl: 'xl',
          }}
        >
          <Link
            fontWeight="bold"
            target="_blank"
            href="https://juleni.github.io/portfolio"
            rel="noreferrer"
          >
            JULENI
          </Link>{' '}
          2023 ... See my{' '}
          <Link
            fontWeight="bold"
            target="_blank"
            href="https://github.com/juleni"
            rel="noreferrer"
          >
            GitHub
          </Link>{' '}
          pages
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
