import { Search2Icon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Menu from './base/Menu';

const Navbar = () => {
  return (
    <HStack
      as="div"
      py="3"
      h={['24', '32']}
      w="full"
      bg="#35515e"
      color="white"
      justifyContent={['space-between', 'space-between']}
      px="6"
    >
      <Center as="div" display="flex" flexDirection="column">
        <Image
          alt="dic1"
          src="/dic1.png"
          width={60}
          height={60}
          style={{ borderRadius: 5 }}
          priority
        />
        <Text as="h1">Dic1.com</Text>
      </Center>
      <Center display={['none', 'inherit']} w="full">
        <InputGroup
          w="40vw"
          border="none"
          bg="white"
          shadow="lg"
          mr="9"
          size="md"
          borderRadius={100}
        >
          <Input
            h="12"
            pr="4.5rem"
            type="text"
            placeholder="Search languages "
          />
          <InputRightElement width="4.5rem">
            <Button
              h="2rem"
              bg="#35515e"
              size="md"
              mt="2"
              onClick={() => console.log('aas')}
            >
              <Search2Icon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Center>
      <Menu />
    </HStack>
  );
};

export default Navbar;
