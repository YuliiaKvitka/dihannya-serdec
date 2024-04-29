// import { Inter } from 'next/font/google';
// import { MuseoSansCyrl } from 'next/font/google';

import './globals.css';
import './base.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

// const fontSite = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Дихання сердець',
  description: 'Дихання сердець',
  icons: {
    icon: './../../public/favicon/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest'></link>
      </head>
      <body className='max-w-[1920px] mx-auto'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
