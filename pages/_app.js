import { ChakraProvider } from '@chakra-ui/react';
import styled from '@emotion/styled';
import '@fontsource/lalezar';
import Head from 'next/head';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import useUSer from '../utils/store/useUser';

const AppContainer = styled.div`
  font-family: 'Lalezar', sans-serif;
`;

const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 7 * 1000,
    },
  },
});

function MyApp({ Component, pageProps }) {
  const { setLang } = useUSer();
  useEffect(() => {
    navigator.languages && navigator.languages.length
      ? setLang(navigator.languages)
      : setLang(navigator.language[0]);
  }, [setLang]);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="mask-icon" href="/splash.png" color="#F7FAFC" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/dic1.png" />
        <link rel="shortcut icon" href="/dic1.png" />
        <meta name="theme-color" content="#F7FAFC" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="apple-touch-startup-image" href="/dic1.png" />
      </Head>
      <QueryClientProvider client={reactQueryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <ChakraProvider>
          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
