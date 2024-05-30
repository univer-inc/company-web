'use client';
import tw from 'twin.macro';

export const Hero = () => {
  return (
    <Container>
      <Inner>
        <MainTitle>
          <MainTitleEn>OUR MISSION</MainTitleEn>
          <MainTitleJa>
            移動で学びを
            <br />
            リデザインする
          </MainTitleJa>
        </MainTitle>
      </Inner>
    </Container>
  );
};

const Container = tw.div`
  bg-orange
`;

const Inner = tw.div`
  max-w-content
  mx-auto
  h-[580px]
  relative
`;

const MainTitle = tw.h1`
  h-[200px]
  absolute
  top-0
  bottom-0
  left-0
  m-auto
`;

const MainTitleEn = tw.span`
  block
  font-roboto
  text-2xl
`;

const MainTitleJa = tw.span`
  block
  text-[50px]
  font-bold
`;
