import { HStack, StackDivider, Text, VStack } from '@chakra-ui/react';
import ClearTasks from './ClearTasks';
import DeleteTask from './DeleteTask';

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
      >
        <HStack key="">
          <Text>To walk the dog</Text>
          <DeleteTask />
        </HStack>
      </VStack>
      <ClearTasks />
    </>
  );
}
