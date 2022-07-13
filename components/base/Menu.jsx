import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        position="fixed"
        top="7"
        right="5"
        zIndex={110}
        tabIndex={-1}
        bg="rgba(53,81,94,0.8)"
        onClick={onOpen}
      >
        <HamburgerIcon w="8" h="10" color="white" />
      </Button>
      <Drawer
        isOpen={isOpen}
        colorScheme="white"
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="rgba(53,81,94,0.8)">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white" display="flex " flexDirection="row">
            <Image
              alt="dic1"
              src="/dic1.png"
              width={40}
              height={40}
              style={{ borderRadius: 5 }}
              priority
            />
            <Text px="2">Dic1</Text>
          </DrawerHeader>

          <DrawerBody color="white">
            <Center
              display="flex "
              flexDirection="column"
              h="60vh"
              justifyContent="space-around"
            >
              <Link href="/">
                <a>
                  <Box>
                    <Text borderBottom={'2px'}>Home</Text>
                  </Box>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Box>
                    <Text borderBottom={'2px'}>Add Word</Text>
                  </Box>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Box>
                    <Text borderBottom={'2px'}>Language</Text>
                  </Box>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Box>
                    <Text borderBottom={'2px'}>Forum</Text>
                  </Box>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <Box>
                    <Text borderBottom={'2px'}>Contact</Text>
                  </Box>
                </a>
              </Link>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
