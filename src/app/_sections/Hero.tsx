'use client';
import tw from 'twin.macro';
import LogoArchitecture from '@/components/icon/logoArchitecture.svg';

export const Hero = () => {
  return (
    <Container>
      <Inner>
        <LogoArchitectureContainer>
          <LogoArchitecture />
        </LogoArchitectureContainer>
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
  overflow-hidden
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

const LogoArchitectureContainer = tw.div`
  absolute
  top-0
  bottom-0
  -right-[30%]
  m-auto
  w-[1250px]
  h-[840px]
`;
