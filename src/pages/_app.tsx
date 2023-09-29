import type { AppProps } from 'next/app'
import Head from 'next/head'

import StoreProvider from '@/providers/StoreProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Games</title>
      </Head>
      <StoreProvider initialState={pageProps.games}>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  )
}
