import type { AppProps } from 'next/app'
import Link from 'next/link'
import GlobalStyle from '../../styles/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
      <nav>
        <Link href={'/'}>main </Link>
        <Link href={'/login'}>login </Link>
        <Link href={'/signup'}>signup</Link>
      </nav>
      <Component {...pageProps} />
    </>
  )
}
