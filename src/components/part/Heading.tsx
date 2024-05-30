'use client';
import tw from 'twin.macro';

export const Heading = ({ en, ja }: { en: string; ja: string }) => {
  return (
    <Container>
      <En>{en}</En>
      <Separator />
      <Ja>{ja}</Ja>
    </Container>
  );
};

const Container = tw.h2`
  inline-flex
  gap-7
  items-center
`;

const En = tw.span`
  block
  text-[50px]
  font-roboto
  leading-none
`;

const Separator = tw.span`
  block
  w-px
  h-[40px]
  bg-black
`;

const Ja = tw.span`
  block
  text-[18px]
`;
