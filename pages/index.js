import { Box } from '@chakra-ui/react';
import SearchWord from '../components/base/SearchWord';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Box
      bg="gray.50"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      w="full"
      h={['100vh', '100vh']}
      style={{ overflowY: 'hidden' }}
    >
      <Navbar />
      <SearchWord />
    </Box>
  );
}
