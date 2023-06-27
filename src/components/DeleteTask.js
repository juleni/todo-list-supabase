import { IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import supabaseClient from '../supabaseClient';

export default function DeleteTask({ id, tasks, setTasks }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const { data, error } = await supabaseClient
      .from('todo')
      .delete()
      .eq('id', id);

    // delete task from array prop
    const newTasks = tasks.filter(item => item.id !== id);
    setTasks(newTasks);
    setLoading(false);
  }
  return (
    <IconButton
      onClick={handleClick}
      isLoading={loading}
      isRound="true"
      icon={<FiTrash2 />}
    />
  );
}
