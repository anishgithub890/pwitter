'use client';

import { Nunito } from 'next/font/google';
import './globals.css';
import ClientOnly from './components/ClientOnly';
import EditModal from './components/modals/EditModal';
import { Toaster } from 'react-hot-toast';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import Layout from './components/Layout';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({ Component, pageProps }: AppProps) {
  //   const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <SessionProvider session={pageProps.session}>
            <Toaster />
            <RegisterModal />
            <LoginModal />
            <EditModal />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
