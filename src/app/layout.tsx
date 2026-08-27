import { LayoutShell } from '@/components/layout/LayoutShell';
import { GlobalStyles } from '@/components/style/GlobalStyle';
import StyledComponentsRegistry from '@/lib/registry';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '株式会社ウニベル / UNIVER inc.',
  description:
    '移動で学びをリデザインする株式会社ウニベルの公式ウェブサイトです。企業情報、事業内容、お知らせなど、ウニベルの最新情報をご覧いただけます。',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <LayoutShell>{children}</LayoutShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
