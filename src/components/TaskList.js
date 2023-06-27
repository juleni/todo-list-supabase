import { StackDivider, VStack } from '@chakra-ui/react';
import ClearTasks from './ClearTasks';

export default function TaskList() {
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
