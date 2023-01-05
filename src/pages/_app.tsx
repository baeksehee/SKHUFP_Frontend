import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <Link href={'/'}>main</Link>
        <Link href={'/login'}>login</Link>
        <Link href={'/signup'}>signup</Link>
      </nav>
      <Component {...pageProps} />
    </>
  )
}
