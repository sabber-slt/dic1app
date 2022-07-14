import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import SearchWord from '../components/base/SearchWord';
import Navbar from '../components/Navbar';
import useUSer from '../utils/store/useUser';
export default function Home() {
  const { setLang } = useUSer();
  useEffect(() => {
    navigator.languages && navigator.languages.length
      ? setLang(navigator.languages)
      : setLang(navigator.language[0]);
  }, [setLang]);
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
