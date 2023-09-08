import { IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function DeleteTask({ id, handleDeleteTask, setDeleteItem }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    setDeleteItem(id);
    handleDeleteTask();
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
