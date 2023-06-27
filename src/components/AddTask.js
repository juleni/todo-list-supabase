import { Button, HStack, Input } from '@chakra-ui/react';

export default function AddTask() {
  return (
    <form>
      <HStack my="4" h="45">
        <Input
          h="100%"
          shadow="xl"
          variant="filled"
          placeholder="Enter task..."
        />
        <Button type="submit" shadow="xl" colorScheme="pink" px="10" h="100%">
          Add
        </Button>
      </HStack>
    </form>
  );
}
