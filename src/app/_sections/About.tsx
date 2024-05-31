import tw from 'twin.macro';
import OriginalLogo from '@/components/icon/logo.svg';
import { Section } from '@/components/part/Section';
import { Heading } from '@/components/part/Heading';
import NextImage from 'next/image';
import { IntersectionFadeIn } from '@/components/effect/IntersectionFadeIn';

export const About = () => {
  return (
    <Section id="about">
      <Heading en="WHO WE ARE" ja="私たちについて" />
      <MainMessage>
        <MessageBox>
          <ObjectLayer tw="h-[calc(tan(60deg) * 214px / 2)] top-0 bottom-0 m-auto right-[calc(100% - 20px)] sm-df:right-auto sm-df:left-[calc(100% -100px)] sm-df:top-0 sm-df:bottom-auto">
            <IntersectionFadeIn>
              <ObjectTriangle />
            </IntersectionFadeIn>
          </ObjectLayer>
          <Logo />
          <MessageText>
            <MessageGroup>
              <p>“UNIVER”と書いてウニベルと読みます。</p>
            </MessageGroup>
            <MessageGroup>
              <p>
                大学の語源となったラテン語のウニベルシタス（universitas）がモチーフです。
              </p>
              <p>
                ウニベルシタスは「ひとつの目的を持った共同体」という意味があります。
              </p>
              <p>
                私たちUNIVERは「学び」というひとつの目的のもと、「移動」によって人々の思考の枠を解放することに貢献していきます。
              </p>
            </MessageGroup>
            <MessageGroup>
              <p>
                異なる価値観や知識が移動によって混ざり合うことで、学生、教員、大学、地域、そして社会にも、新たな可能性を広げるきっかけを創り続けていきます。
              </p>
            </MessageGroup>
          </MessageText>
        </MessageBox>
        <PortraitArea>
          <ObjectLayer tw="w-[146px] h-[146px] top-0 right-0">
            <IntersectionFadeIn>
              <ObjectSquare />
            </IntersectionFadeIn>
          </ObjectLayer>
          <ObjectLayer tw="w-[164px] h-[164px] bottom-0 left-0 sm-df:bottom-10">
            <IntersectionFadeIn delay={50}>
              <ObjectCircle />
            </IntersectionFadeIn>
          </ObjectLayer>
          <Person>
            <IntersectionFadeIn delay={50}>
              <Portrait>
                <PortraitImage
                  src="/top/portrait.jpg"
                  alt=""
                  width="1060"
                  height="1034"
                  // objectFit="cover"
                />
              </Portrait>
            </IntersectionFadeIn>
            <PersonInfo>
              <PersonTitle>代表取締役CEO</PersonTitle>
              <PersonName>横山 真輔</PersonName>
            </PersonInfo>
          </Person>
        </PortraitArea>
      </MainMessage>
    </Section>
  );
};

const Logo = tw(OriginalLogo)`
  w-[335px]
  sm-df:w-[290px]
`;

const MainMessage = tw.div`
  flex
  relative
  gap-4
  mt-[120px]
  lg-df:flex-col
  lg-df:gap-10
  md-df:mt-[60px]
`;

const MessageBox = tw.div`
  relative
  flex
  flex-col
  gap-12
`;

const MessageText = tw.div`
  relative
  w-[460px]
  flex
  flex-col
  gap-8
  lg-df:w-auto
`;

const MessageGroup = tw.div`
`;

const ObjectLayer = tw.div`
  absolute
`;

const ObjectTriangle = tw.div`
  bg-orange
  w-[214px]
  // https://qiita.com/degudegu2510/items/09f34d4b218c9df6bb57
  h-[calc(tan(60deg) * 214px / 2)]
  [clip-path: polygon(50% 0, 100% 100%, 0 100%)]
`;

const ObjectSquare = tw.div`
  bg-orange
  w-[146px]
  h-[146px]
`;

const ObjectCircle = tw.div`
  bg-black
  w-[164px]
  h-[164px]
  rounded-[50%]
`;

const PortraitArea = tw.div`
  w-full
  relative
`;

const Person = tw.div`
  absolute
  w-[355px]
  left-0
  right-0
  top-0
  bottom-0
  m-auto
  flex
  gap-4
  flex-col
  lg-df:relative
  md-df:gap-10
`;

const Portrait = tw.div`
  w-[355px]
  h-[355px]
  rounded-[50%]
  overflow-hidden
`;

const PortraitImage = tw(NextImage)`
  w-full
  h-full
  object-cover
`;

const PersonInfo = tw.div`
  flex
  justify-center
  items-center
  gap-4
`;

const PersonTitle = tw.p`
`;

const PersonName = tw.p`
  text-[20px]
  font-bold
`;
