import { IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import supabaseClient from '../supabaseClient';

export default function UpdateTask({ id, isDone, setTasks }) {
  const [loading, setLoading] = useState(false);
  const [isDoneTask, setIsDoneTask] = useState(isDone);

  async function handleClick() {
    setLoading(true);
    setIsDoneTask(!isDoneTask);
    let { data: tasks, error } = await supabaseClient
      .from('todo')
      .update({ is_done: !isDone })
      .eq('id', id);
    setTasks = { tasks };
    setLoading(false);
  }
  return (
    <IconButton
      onClick={handleClick}
      isLoading={loading}
      isRound="true"
      icon={isDoneTask ? <FiCheck /> : <FiX />}
      bg={isDoneTask ? '#DAF7A6' : '#F5B7B1'}
      _hover={{ bgColor: isDoneTask ? '#c4e38d' : '#eda9a4' }}
    />
  );
}
