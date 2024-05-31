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
  sm-df:flex-col
  sm-df:items-start
  sm-df:gap-4
`;

const En = tw.span`
  block
  text-[50px]
  font-roboto 
  leading-none
  sm-df:text-[30px]
`;

const Separator = tw.span`
  block
  w-px
  h-[40px]
  bg-black
  sm-df:h-px
  sm-df:w-[50px]
`;

const Ja = tw.span`
  block
  text-[18px]
`;
