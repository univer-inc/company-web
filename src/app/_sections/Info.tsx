import tw from 'twin.macro';
import OriginalLogo from '@/components/icon/logo.svg';
import { Section } from '@/components/part/Section';
import { Heading } from '@/components/part/Heading';

// import tw from 'twin.macro';

export const Info = () => {
  return (
    <Section>
      <div tw="h-6">aa</div>
      <Heading en="WHO WE ARE" ja="私たちについて" />
      <MainMessage>
        <ObjectLayer tw="top-0 bottom-0 my-auto right-[calc(100% - 20px)]">
          <ObjectTriangle />
        </ObjectLayer>
        <ObjectLayer>
          <ObjectSquare />
        </ObjectLayer>
        <ObjectLayer>
          <ObjectCircle />
        </ObjectLayer>
        <MessageBox>
          <Logo />
          <Message>
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
          </Message>
        </MessageBox>
        <div>写真</div>
      </MainMessage>
    </Section>
  );
};

const Logo = tw(OriginalLogo)`
  w-[335px]
`;

const MainMessage = tw.div`
  flex
  relative
  gap-4
  mt-[120px]
`;

const MessageBox = tw.div`
  relative
  w-[460px]
  flex
  flex-col
  gap-12
`;

const Message = tw.div`
  w-[460px]
  flex
  flex-col
  gap-8
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
