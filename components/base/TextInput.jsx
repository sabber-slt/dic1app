import { CopyIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Flex,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { option } from '../../option';
import useUSer from '../../utils/store/useUser';
import Language from './Language';

const TextInput = () => {
  const { lang } = useUSer();
  const [lang1, setLang1] = useState('');
  const [lang2, setLang2] = useState('');
  const [searchText, setSearchText] = useState('');
  const [inputText, setInputText] = useState('');
  const [audSearch, setaAudSearch] = useState('');

  useEffect(() => {
    const userDefaultLang1 = option.find((id) => id.code === lang[1]);
    const userDefaultLang2 = option.find((id) => id.code === lang[2]);
    setLang1(userDefaultLang1);
    setLang2(userDefaultLang2);
  }, [lang]);

  const { data, isLoading, isError } = useQuery(
    'translate',
    async () => {
      const response = await fetch(
        `http://xyp.ir/productsList.php?q=${inputText}&source=en&target=fr`
      );
      const data = await response.json();
      return data;
    },
    {
      refetchInterval: 5000,
    }
  );
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error </p>;

  const search = async (value) => {
    setaAudSearch(value);
    const item = await fetch(
      `http://xyp.ir/textarea.php?q=${value}&source=en&target=fa&app=appi`
    );
    const json = await item.text();
    if (json) {
      setSearchText(json);
    }
    setInputText('');
  };
  const playSound = async () => {
    const res = await fetch(
      `http://xyp.ir/audio1.php?text=${audSearch}&pitch=30&voice=en&rate=90`
    );
    const aud = await res.json();
    console.log(aud);
  };

  return (
    <Center h="100vh">
      <Language />
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
            <Select
              p="2"
              mt={['4', '0']}
              w="110px"
              fontSize={['sm']}
              h={['6']}
              borderColor="rgba(53,81,94,0.8)"
            >
              <option value={lang2.code}>{lang2.language}</option>
              {option.map((lang) => (
                <option color="rgb(53,81,94)" key={lang.id} value={lang.code}>
                  {lang.language}
                </option>
              ))}
            </Select>
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
          {data?.length > 0 && (
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
              {data.map((item, index) => (
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
                boxShadow: 'lg',
                transform: 'rotate(90deg)',
                transition: 'all 0.2s ease-in-out',
              }}
              onClick={() => {
                // setLang1(lang1 === 'فارسی' ? 'English' : 'فارسی');
                // setLang2(lang2 === 'فارسی' ? 'English' : 'فارسی');
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
            <Select
              p="2"
              mt={['4', '5']}
              w="110px"
              fontSize={['sm']}
              h={['6']}
              borderColor="rgba(53,81,94,0.8)"
              placeholder={lang2[0]}
            >
              <option value={lang1.code}>{lang1.language}</option>
              {option.map((lang) => (
                <option color="rgb(53,81,94)" key={lang.id} value={lang.code}>
                  {lang.language}
                </option>
              ))}
            </Select>
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
            <Text fontSize="sm">{searchText}</Text>
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

export default TextInput;
