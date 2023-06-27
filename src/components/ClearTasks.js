import { Button, Flex } from '@chakra-ui/react';

export default function ClearTasks() {
  return (
    <Flex>
      <Button
        colorScheme="gray"
        shadow="xl"
        px="8"
        h="45"
        color="gray.500"
        mt="10"
      >
        Clear Tasks
      </Button>
    </Flex>
  );
}
