/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronDownIcon, CopyIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { option } from '../../option';
import useUSer from '../../utils/store/useUser';

const SearchWord = () => {
  const { lang } = useUSer();
  const [lang1, setLang1] = useState('');
  const [lang2, setLang2] = useState('');
  const [searchText, setSearchText] = useState('');
  const [res, setRes] = useState('');
  const [inputText, setInputText] = useState('');
  const [langSource, setLangSource] = useState('en');
  const [langTarget, setLangTarget] = useState('en');

  useEffect(() => {
    const userDefaultLang1 = option.find((id) => id.code === lang[1]);
    const userDefaultLang2 = option.find((id) => id.code === lang[2]);
    setLang1(userDefaultLang1);
    setLang2(userDefaultLang2);
    setLangSource(userDefaultLang1.code);
    setLangTarget(userDefaultLang2.code);
  }, [lang]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `http://xyp.ir/productsList.php?q=${inputText}&source=${langSource}&target=${langTarget}`
      ).then((res) => res.json());
      setRes(data);
    }
    fetchData();
  }, [inputText]);

  console.log(res);
  const search = async (value) => {
    const t = await fetch(
      `http://xyp.ir/textarea.php?q=${value}&source=${langSource}&target=${langTarget}&app=appi`
    );
    const json = await t.text();
    setSearchText(json);
    setRes('');
  };
  console.log(lang1);

  return (
    <Center h="100vh" style={{ overflow: 'hidden' }}>
      <Flex
        h="full"
        flexDirection={['column', 'row']}
        justifyContent={['center', 'center']}
      >
        <Center
          w={['72', '80']}
          h={['25vh', '40vh']}
          display="flex"
          flexDirection="column"
          bg="gray.200"
          shadow="lg"
        >
          <Flex w="full" justifyContent="flex-start">
            <Menu>
              <MenuButton
                w="28"
                mt="5"
                as={Button}
                bg="white"
                rightIcon={<ChevronDownIcon />}
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'white' }}
                borderRadius={0}
                _focus={{ boxShadow: 'outline' }}
              >
                {lang1.language}
              </MenuButton>
              <MenuList w="28" h="36" overflowY={['auto', 'auto']} zIndex={200}>
                {option.map((lang) => (
                  <MenuItem
                    onClick={() => {
                      setLang1(lang);
                      setLangSource(lang.code);
                    }}
                    key={lang.id}
                  >
                    {lang.language}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>

          <Input
            placeholder="Enter your text here"
            fontSize={['2xl', '4xl']}
            w="72"
            h={['32', '36']}
            border="none"
            focusBorderColor="gray.200"
            bg="gray.200"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            resize="none"
            borderRadius="none"
          />
          {res?.length > 0 && (
            <VStack
              position="absolute"
              zIndex={200}
              w="72"
              h="24"
              bg="white"
              overflowY={['auto', 'auto']}
              mt="40"
              alignItems="flex-start"
              border="2px solid rgba(53,81,94,0.8)"
            >
              {res.map((item, index) => (
                <Box
                  key={index}
                  px="2"
                  pt="1"
                  onClick={() => search(item.text)}
                >
                  <Text textAlign="left">{item.text} </Text>
                </Box>
              ))}
            </VStack>
          )}

          <Flex w="72" h={['14']} px="1" bg="gray.200" justifyContent="end">
            <Box pr="2" w={['fit-content']}>
              <Image alt="" src="/sound.png" width={25} height={20} priority />
            </Box>
            <CopyIcon w="5" h="5" color="rgba(53,81,94,0.8)" />
          </Flex>
        </Center>
        <Box
          zIndex={100}
          position="absolute"
          display="flex"
          flexDirection="column"
        >
          <Center w="72" mt={['0', '17vh']}>
            <Center
              w="14"
              h="14"
              transform={['rotate(0deg)', 'rotate(-90deg)']}
              bg="white"
              borderRadius={100}
              boxShadow="xl"
              _active={{
                boxShadow: 'none',
                transform: 'scale(0.8)',
                // transition: 'all 0.2s ease-in-out',
              }}
              onClick={() => {
                'vibrate' in navigator
                  ? navigator.vibrate(200)
                  : console.log('no');
                setLang1(lang2);
                setLang2(lang1);
                setLangSource(lang2.code);
                setLangTarget(lang1.code);
              }}
            >
              <Image alt="" src="/upDown.png" width={30} height={30} priority />
            </Center>
          </Center>
        </Box>
        <Center
          w={['72', '80']}
          h={['25vh', '40vh']}
          display="flex"
          flexDirection="column"
          bg="white"
          shadow="lg"
        >
          <Flex w="full" justifyContent="flex-start">
            <Menu>
              <MenuButton
                mt="5"
                as={Button}
                w="28"
                rightIcon={<ChevronDownIcon />}
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'white' }}
                borderRadius={0}
                _focus={{ boxShadow: 'outline' }}
              >
                {lang2.language}
              </MenuButton>
              <MenuList w="28" h="36" overflowY={['auto', 'auto']}>
                {option.map((lang) => (
                  <MenuItem
                    onClick={() => {
                      setLang2(lang);
                      setLangTarget(lang.code);
                    }}
                    key={lang.id}
                  >
                    {lang.language}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
          <Box
            fontSize={['2xl', '4xl']}
            placeholder="Transition"
            w="72"
            h={['32', '36']}
            border="none"
            bg="white"
            resize="none"
            borderRadius="none"
            overflowY={['auto', 'auto']}
          >
            <Text fontSize="sm" px="2">
              {searchText}
            </Text>
          </Box>

          <Flex w="72" h={['14', '20']} px="1" bg="white" justifyContent="end">
            <Box pr="2" w={['fit-content']} onClick={console.log('book')}>
              <Image alt="" src="/sound.png" width={25} height={20} priority />
            </Box>
            <CopyIcon w="5" h="5" color="rgba(53,81,94,0.8)" />
          </Flex>
        </Center>
      </Flex>
    </Center>
  );
};

export default SearchWord;
