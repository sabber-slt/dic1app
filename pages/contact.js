import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/router';

const Contact = () => {
  const router = useRouter();

  const [err] = useState('');
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    console.log(values);

    router.push('/');
  }

  return (
    <Box w="full" h="100vh" bg="gray.200" style={{ direction: 'ltr' }}>
      <Center h="100vh">
        <Center
          w="96"
          px="10"
          display="flex"
          flexDirection="column"
          h="70vh"
          bgGradient="linear(to-t, rgb(53,81,94),rgba(53,81,94,0.7), rgba(53,81,94,0.4))"
          borderRadius="lg"
        >
          <Text color="white">{err}</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt="3" px="5">
              <FormLabel htmlFor="name" color="white">
                {' '}
                Name
              </FormLabel>
              <Input
                id="name"
                type={'number'}
                color="white"
                bgColor="rgba(34,84,61,0.1)"
                {...register('name', {
                  required: 'This is required',
                })}
              />
              <FormLabel mt="3" htmlFor="phone" color="white">
                Email
              </FormLabel>
              <Input
                id="phone"
                type={'text'}
                color="white"
                bgColor="rgba(34,84,61,0.1)"
                {...register('phone', {
                  required: 'This is required',
                })}
              />
              <FormLabel mt="3" htmlFor="phone" color="white">
                Text
              </FormLabel>
              <Textarea
                {...register('content', {
                  required: 'This is required',
                })}
                w="80"
                color="white"
              />
              <Center>
                <VStack>
                  <Button
                    mt={4}
                    colorScheme="white"
                    isLoading={isSubmitting}
                    type="submit"
                    border={'2px solid white'}
                    borderColor="white"
                  >
                    Send
                  </Button>
                </VStack>
              </Center>
            </FormControl>
          </form>
        </Center>
      </Center>
    </Box>
  );
};

export default Contact;
