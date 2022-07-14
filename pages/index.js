import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import SearchWord from '../components/base/SearchWord';
import Navbar from '../components/Navbar';
import useUSer from '../utils/store/useUser';
export default function Home() {
  const { setLang, lang } = useUSer();
  useEffect(() => {
    const res = async () => {
      const user = await fetch('https://ipinfo.io?token=b8084616ba7a7d');
      const userJson = await user.json();

      setLang(['en', userJson.country.toLowerCase(), 'en']);
    };
    res();
  }, []);

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
