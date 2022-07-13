import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Center, Select } from '@chakra-ui/react';
import { useState } from 'react';

const Swich = () => {
  const [lang1, setLang1] = useState('فارسی');
  const [lang2, setLang2] = useState('English');
  return (
    <Box>
      <Select w="36" borderColor="rgba(53,81,94,0.8)" placeholder={lang1}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Center>
        <Box
          position="relative"
          h="8"
          w="36"
          display="flex"
          justifyContent="center"
        >
          <ArrowUpIcon
            pl="3"
            position="absolute"
            boxSize="7"
            color="rgba(53,81,94,0.8)"
          />
          <ArrowDownIcon
            pr="3"
            position="absolute"
            boxSize="7"
            color="rgba(53,81,94,0.8)"
          />
        </Box>
      </Center>
      <Select w="36" borderColor="rgba(53,81,94,0.8)" placeholder={lang2}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Box>
  );
};

export default Swich;
