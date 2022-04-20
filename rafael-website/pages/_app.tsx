import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/ScrollObserver'
import { Children } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
  )
}

export default MyApp
