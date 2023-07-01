import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MarqueeTop from '../components/MarqueeTop'
import MarqueeBottom from '../components/MarqueeBottom'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MarqueeTop />
      <Component {...pageProps} />
      <MarqueeBottom />
    </>
  )
}
export default MyApp