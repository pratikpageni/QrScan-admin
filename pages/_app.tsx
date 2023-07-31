import MainLayout from '@/layouts/MainLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
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
