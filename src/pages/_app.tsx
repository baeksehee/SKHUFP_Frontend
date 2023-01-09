import type { AppProps } from 'next/app'
import Link from 'next/link'
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
      <nav>
        <Link href={'/'}>main </Link>
        <Link href={'/login'}>login </Link>
        <Link href={'/signup'}>signup </Link>
        <Link href={'/main'}>main2.. </Link>
        <Link href={'/m_add'}>main_add </Link>
        <Link href={'/m_edit'}>main_edit </Link>
        <Link href={'/daily'}>daily </Link>
        <Link href={'/d_add'}>daily_add </Link>
        <Link href={'/d_add_detail'}>daily_add_detail</Link>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

// const Logo = styled.h1`
// text-decoration: none;
// color: #d0bcf2;
// `;