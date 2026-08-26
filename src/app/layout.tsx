import { LayoutShell } from '@/components/layout/LayoutShell';
import { GlobalStyles } from '@/components/style/GlobalStyle';
import StyledComponentsRegistry from '@/lib/registry';
import type { Metadata } from 'next';

// TODO: https://nextjs.org/docs/architecture/nextjs-compiler
// import { Roboto } from 'next/font/google';
// const robotoFont = Roboto({
//   weight: '500',
//   subsets: ['latin'],
//   variable: '--font-roboto',
// });

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
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* <body className={robotoFont.variable}> */}
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
