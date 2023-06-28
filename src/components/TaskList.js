import {
  Box,
  HStack,
  Image,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import img from '../images/todolist.svg';
import supabaseClient from '../supabaseClient';
import ClearTasks from './ClearTasks';
import DeleteTask from './DeleteTask';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    let { data: tasks, error } = await supabaseClient.from('todo').select('*');
    setTasks(tasks);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Box align="center" p="5">
        <Text
          p="3"
          pl="6"
          pr="6"
          color="gray.500"
          backgroundColor="gray.50"
          borderRadius="lg"
          shadow="xl"
        >
          Loading ...
        </Text>{' '}
      </Box>
    );
  } else if (!loading && !tasks.length) {
    return (
      <Box align="center">
        <Image
          src={img}
          maxW={{ base: '60%', sm: '60%', lg: '40%', xl: '20%' }}
        />
      </Box>
    );
  } else {
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
          {tasks.map(task => (
            <HStack key={task.id}>
              <Text w="100%" p="8px" borderRadius="lg">
                {task.text}
              </Text>
              <DeleteTask id={task.id} tasks={tasks} setTasks={setTasks} />
            </HStack>
          ))}
        </VStack>
        <ClearTasks />
      </>
    );
  }
}
