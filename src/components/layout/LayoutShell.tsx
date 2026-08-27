'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export const LayoutShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isCommLab = pathname.startsWith('/communication-lab');

  if (isCommLab) return <>{children}</>;

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
