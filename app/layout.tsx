import '@/styles/globals.css';
import type { Metadata } from 'next';
import ReactParticle from '@/src/components/ReactParticle';
import Navbar from '@/src/components/Navbar';
import { childrenProps } from '@/src/interfaces/Interface';
import ActiveSectionContextProvider from '@/src/context/ActiveSectionContext';
import { Fira_Code, Roboto } from 'next/font/google';

const fira_code = Fira_Code({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Shahnawaz',
  description: 'This is my Protfolio Website',
};

export default function RootLayout({ children }: childrenProps) {
  return (
    <html lang='en' className={`${fira_code.variable} ${roboto.variable}`}>
      <body>
        <ReactParticle />
        <ActiveSectionContextProvider>
          <Navbar />
          <main>{children}</main>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
