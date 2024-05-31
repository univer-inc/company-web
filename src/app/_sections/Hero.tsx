'use client';
import tw from 'twin.macro';
import LogoArchitecture from '@/components/icon/logoArchitecture.svg';
import { IntersectionFadeIn } from '@/components/effect/IntersectionFadeIn';

export const Hero = () => {
  return (
    <Container>
      <Inner>
        <LogoArchitectureContainer>
          <IntersectionFadeIn scaling>
            <LogoArchitecture />
          </IntersectionFadeIn>
        </LogoArchitectureContainer>
        <MainTitle>
          <IntersectionFadeIn delay={500}>
            <MainTitleEn>OUR MISSION</MainTitleEn>
            <MainTitleJa>
              移動で学びを
              <br />
              リデザインする
            </MainTitleJa>
          </IntersectionFadeIn>
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
  max-h-[580px]
  sm-df:min-h-[400px]
  w-full
  aspect-4/3
  relative
`;

const MainTitle = tw.h1`
  h-[200px]
  absolute
  top-0
  bottom-0
  left-0
  m-auto
  lg-df:left-7
  sm-df:top-auto
  sm-df:bottom-7
  sm-df:h-auto
`;

const MainTitleEn = tw.span`
  block
  font-roboto
  text-2xl
  sm-df:text-[20px]
`;

const MainTitleJa = tw.span`
  block
  text-[50px]
  font-bold
  sm-df:text-[32px]
  sm-df:leading-normal
`;

const LogoArchitectureContainer = tw.div`
  absolute
  top-0
  bottom-0
  -right-[30%]
  m-auto
  w-[1250px]
  h-[840px]
  sm-df:w-[600px]
  sm-df:top-[50%]
`;
