import { Box, Image, StackDivider, VStack } from '@chakra-ui/react';
//import { ReactComponent as Logo } from '../images/todolist.svg';
import img from '../images/todolist.svg';
import ClearTasks from './ClearTasks';

export default function TaskList() {
  return (
    <Box align="center">
      <Image
        src={img}
        maxW={{ base: '60%', sm: '60%', lg: '40%', xl: '20%' }}
      />
    </Box>
  );

  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="5"
        borderRadius="lg"
        w="100%"
        maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
        alignItems="stretch"
        shadow="xl"
      >
        {/**
         * 
        <HStack key="">
          <Text w="100%" p="8px" borderRadius="lg">
            To walk the dog
          </Text>
          <DeleteTask />
        </HStack>
         */}
      </VStack>
      <ClearTasks />
    </>
  );
}
