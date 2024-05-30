import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 株式会社ウニベル',
  description: '株式会社ウニベルのプライバシーポリシーです。',
};

const Layout = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default Layout;
