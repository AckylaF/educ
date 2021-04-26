import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { theme } from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Educ</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <meta name="description" content="" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
