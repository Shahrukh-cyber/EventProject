import '../styles/globals.css'
import Link from 'next/link';
import MainHeader from '../components/layout/main-header';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MainHeader />
      <Component {...pageProps} />

    </div>
  )
}

export default MyApp
