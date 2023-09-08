import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

export default function ClearTasks({ handleDeleteTask, setDeleteItem }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    setDeleteItem(-1);
    handleDeleteTask();
    setLoading(false);
  }

  return (
    <Flex>
      <Button
        colorScheme="gray"
        shadow="xl"
        px="8"
        h="45"
        color="gray.500"
        mt="10"
        onClick={() => handleClick()}
        isLoading={loading}
        loadingText="Clearing ..."
      >
        Clear Tasks
      </Button>
    </Flex>
  );
}
