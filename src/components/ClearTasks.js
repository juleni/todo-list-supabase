import { Button, Flex, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import supabaseClient from '../supabaseClient';

export default function ClearTasks({ setReloadList }) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  async function handleClick(e) {
    // Delete all tasks from db
    setLoading(true);
    const { data, error } = await supabaseClient
      .from('todo')
      .delete()
      .neq('id', 0);
    toast({
      title: error || 'All TODO tasks were deleted.',
      status: error ? 'error' : 'success',
      position: 'top-left',
      duration: 2000,
      isClosable: true,
    });
    setReloadList(true);
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
        onClick={handleClick}
        isLoading={loading}
        loadingText="Clearing ..."
      >
        Clear Tasks
      </Button>
    </Flex>
  );
}
