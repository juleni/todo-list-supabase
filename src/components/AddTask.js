import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import supabaseClient from '../supabaseClient';

export default function AddTask({ setReloadList }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  async function handleSubmit(e) {
    e.preventDefault();

    if (text.trim().length === 0) {
      toast({
        title: 'Task cannot be empty. Please enter a context.',
        status: 'error',
        position: 'top-left',
        duration: 2000,
        isClosable: true,
      });
    } else {
      setLoading(true);
      const { data, error } = await supabaseClient
        .from('todo')
        .insert([{ text: text }]);

      toast({
        title: error || 'TODO Task added.',
        status: error ? 'error' : 'success',
        position: 'top-left',
        duration: 2000,
        isClosable: true,
      });
      setReloadList(true);
      setText('');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack my="4" h="45">
        <Input
          h="100%"
          shadow="xl"
          variant="filled"
          placeholder="Enter task..."
          value={text}
          onChange={e => setText(e.target.value)}
          disabled={loading}
        />
        <Button
          type="submit"
          shadow="xl"
          colorScheme="pink"
          px="10"
          h="100%"
          isLoading={loading}
          loadingText="Adding"
        >
          Add
        </Button>
      </HStack>
    </form>
  );
}
