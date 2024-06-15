import Navbar from '@/src/components/Navbar';
import { childrenProps } from '@/src/interfaces/Interface';
import ActiveSectionContextProvider from '@/src/context/ActiveSectionContext';

export default function Layout({ children }: childrenProps) {
  return (
    <>
      <ActiveSectionContextProvider>
        <Navbar />
        <main>{children}</main>
      </ActiveSectionContextProvider>
    </>
  );
}
