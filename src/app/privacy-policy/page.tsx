'use client';

import { Section } from '@/components/part/Section';
import {
  PrivacyPolicyContent,
  PrivacyPolicyContents,
  privacyPolicy,
} from '@/data/privacyPolicy';
import styled from 'styled-components';
import tw from 'twin.macro';

const isString = (arg: any): arg is string => typeof arg === 'string';

const CommonContent = ({ content }: { content: PrivacyPolicyContent }) => {
  if (isString(content)) return content;
  if (content.type === 'mixed-content')
    return (
      <MixedContent
        key={content.content.toString()}
        contents={content.content}
      />
    );
  if (content.type === 'ordered-list')
    return (
      <OrderedList
        key={content.content.toString()}
        contents={content.content}
      />
    );
  return <></>;
};

type MixedContentProps = {
  contents: PrivacyPolicyContents;
  key: string;
};

const MixedContent = ({ contents, key }: MixedContentProps) => {
  return contents.map((item) => {
    return <CommonContent key={key} content={item} />;
  });
};

type OrderedListItemProps = {
  contents: PrivacyPolicyContents;
  key: string;
};

const OrderedList = ({ contents, key }: OrderedListItemProps) => {
  return (
    <ol>
      {contents.map((item) => {
        return (
          <li key={key}>
            <CommonContent content={item} />
          </li>
        );
      })}
    </ol>
  );
};

const Content = ({ content }: { content: PrivacyPolicyContents }) => {
  return content.map((item) => {
    if (isString(item)) {
      return <TextLine key={item}>{item}</TextLine>;
    }

    if (item.type === 'ordered-list') {
      return (
        <OrderedList key={item.content.toString()} contents={item.content} />
      );
    }

    if (item.type === 'mixed-content') {
      return (
        <MixedContent key={item.content.toString()} contents={item.content} />
      );
    }
  });
};

const PrivacyPolicy = () => {
  return (
    <Section>
      <PageTitle>
        <PageTitleEn>PRIVACY POLICY</PageTitleEn>
        <PageTitleJa>プライバシーポリシー</PageTitleJa>
      </PageTitle>
      <Body>
        {privacyPolicy.map((unit, index) => {
          if (typeof unit === 'string') return <TextLine>{unit}</TextLine>;
          // TODO: 再帰で書き直し
          return (
            <Unit key={unit.heading}>
              <Heading>
                {index}. {unit.heading}
              </Heading>
              <ContentStyle>
                <Content content={unit.content} />
              </ContentStyle>
              {/* {unit.content.map((c) => {
                // if (typeof c === 'string') {
                //   return <TextLine key={c}>{c}</TextLine>;
                // }
                // if (c.type === 'ordered-list') {
                //   return c.content.map((cc, i) => {
                //     if (typeof cc === 'string') {
                //       return (
                //         // <OrderedListItem key={cc} index={i} text={cc} level={1}/>
                //         <TextLine key={cc}>
                //           {i + 1}. {cc}
                //         </TextLine>
                //       );
                //     }
                //     if (cc.type === 'mixed-content') {
                //       return (
                //         <>
                //           {cc.content.map((gcc, gcci) => {
                //             if (typeof gcc === 'string') {
                //               return (
                //                 <TextLine key={gcc}>
                //                   {i + 1}.{gcc}
                //                 </TextLine>
                //               );
                //             }
                //             if (gcc.type === 'ordered-list') {
                //               return gcc.content.map((ggcc, ggcci) => {
                //                 if (typeof ggcc === 'string') {
                //                   return (
                //                     <TextLine key={ggcc}>
                //                       ({ggcci + 1}) {ggcc}
                //                     </TextLine>
                //                   );
                //                 }
                //               });
                //             }
                //           })}
                //         </>
                //       );
                //     }
                //   });
                // }
              })} */}
            </Unit>
          );
        })}
      </Body>
    </Section>
  );
};

const PageTitle = tw.h1`
  flex
  flex-col
  gap-6
  md-df:gap-2
`;

const PageTitleEn = tw.p`
  font-roboto
  text-[18px]
`;

const PageTitleJa = tw.p`
  font-roboto
  text-[50px]
  font-bold
  leading-tight
  md-df:text-[32px]
`;

const Body = tw.div`
  flex
  flex-col
  gap-6
  mt-4
`;

const Unit = tw.div``;

const TextLine = tw.p``;

const Heading = tw.h2`
  text-2xl
  leading-tight
  mb-4
`;

const ContentStyle = styled.div`
  & ol {
    ${tw`mt-4 list-decimal`}

    & > li {
      ${tw`ml-6`}
    }

    & ol {
      ${tw`list-none [counter-reset: number]`}

      & > li {
        ${tw`relative ml-0 pl-10`}

        &::before {
          counter-increment: number;
          content: '（' counter(number) '）';
          position: absolute;
          left: 0;
        }
      }
    }
  }
`;

export default PrivacyPolicy;
