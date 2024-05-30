'use client';
import tw from 'twin.macro';

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};

const Container = tw.footer``;

const Inner = tw.div`

`;
