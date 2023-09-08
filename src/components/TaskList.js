import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import img from '../images/todolist.svg';
import supabaseClient from '../supabaseClient';
import ClearTasks from './ClearTasks';
import DeleteTask from './DeleteTask';
import UpdateTask from './UpdateTask';

export default function TaskList({ reloadList, setReloadList }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const handlePClick = () => setShow(!show);
  const [value, setValue] = useState('');
  const [deleteItem, setDeleteItem] = useState(null);
  const toast = useToast();

  async function fetchData() {
    setLoading(true);
    let { data: tasks, error } = await supabaseClient.from('todo').select('*');
    setTasks(tasks);
    setLoading(false);
  }

  function handleDeleteTask() {
    onOpen();
  }

  const handleChangeValue = event => setValue(event.target.value);

  async function handleCheckValue(e) {
    e.preventDefault();
    console.log('handleCheckValue');
    if (value === 'todo') {
      onClose();
      // Delete task from db
      let errMessage = null;
      let title = '';

      if (deleteItem === -1) {
        title = 'All TODO tasks were deleted.';
        // Delete all tasks from db
        const { data, error } = await supabaseClient
          .from('todo')
          .delete()
          .neq('id', 0);
        errMessage = error;
      } else if (deleteItem > 0) {
        // Delete one specific task from db
        title = 'TODO Task deleted.';
        const { data, error } = await supabaseClient
          .from('todo')
          .delete()
          .eq('id', deleteItem);

        errMessage = error;
        // delete task from array prop
        const newTasks = tasks.filter(item => item.id !== deleteItem);
        setTasks(newTasks);
      }

      toast({
        title: errMessage || title,
        status: errMessage ? 'error' : 'success',
        position: 'top-left',
        duration: 2000,
        isClosable: true,
      });

      setReloadList(true);
    } else {
      console.log('WRONG PASSWORD');
      onClose();
    }
    setValue('');
  }

  useEffect(() => {
    fetchData();
    setReloadList(false);
  }, [reloadList]);

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
        <Image width="500px" src={img} />
      </Box>
    );
  } else {
    return (
      <>
        <VStack
          borderColor="gray.100"
          borderWidth="2px"
          p="5"
          borderRadius="lg"
          w="100%"
          maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
          alignItems="stretch"
          shadow="xl"
        >
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Delete record check</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? 'text' : 'password'}
                    placeholder="Enter password"
                    onChange={handleChangeValue}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handlePClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </ModalBody>

              <ModalFooter>
                <Button
                  type="submit"
                  shadow="xl"
                  colorScheme="pink"
                  px="20px"
                  py="9px"
                  h="100%"
                  mr="8px"
                  onClick={e => handleCheckValue(e)}
                  isLoading={loading}
                  loadingText="Closing"
                >
                  Check
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          ;
          {tasks.map(task => (
            <HStack key={task.id}>
              <Text w="100%" p="8px" borderRadius="lg">
                {task.text}
              </Text>
              <DeleteTask
                id={task.id}
                tasks={tasks}
                setTasks={setTasks}
                handleDeleteTask={handleDeleteTask}
                setDeleteItem={setDeleteItem}
              />
              <UpdateTask
                id={task.id}
                isDone={task.is_done}
                setTasks={setTasks}
              />
            </HStack>
          ))}
        </VStack>
        <ClearTasks
          handleDeleteTask={handleDeleteTask}
          setDeleteItem={setDeleteItem}
        />
      </>
    );
  }
}
