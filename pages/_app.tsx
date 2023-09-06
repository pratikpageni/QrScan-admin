import MainLayout from '@/layouts/MainLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname === '/login') {
    return <Component {...pageProps} />;
  } else {
    return (
      <MainLayout
        // NavbarTitle='Dashboard'
        // NavDescription='Welcome to Restro Admin, Pratik !'
        {...pageProps}
      >
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}
