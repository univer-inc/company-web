'use client';

import { Section } from '@/components/part/Section';
import { privacyPolicy } from '@/data/privacyPolicy';
import tw from 'twin.macro';

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
                {index + 1}. {unit.heading}
              </Heading>
              {unit.content.map((c) => {
                if (typeof c === 'string') {
                  return <TextLine key={c}>{c}</TextLine>;
                }
                if (c.type === 'ordered-list') {
                  return c.content.map((cc, i) => {
                    if (typeof cc === 'string') {
                      return (
                        <TextLine key={cc}>
                          {i + 1}. {cc}
                        </TextLine>
                      );
                    }
                    if (cc.type === 'content-array') {
                      return (
                        <>
                          {cc.content.map((gcc, gcci) => {
                            if (typeof gcc === 'string') {
                              return (
                                <TextLine key={gcc}>
                                  {i + 1}.{gcc}
                                </TextLine>
                              );
                            }
                            if (gcc.type === 'ordered-list') {
                              return gcc.content.map((ggcc, ggcci) => {
                                if (typeof ggcc === 'string') {
                                  return (
                                    <TextLine key={ggcc}>
                                      ({ggcci + 1}) {ggcc}
                                    </TextLine>
                                  );
                                }
                              });
                            }
                          })}
                        </>
                      );
                    }

                    return 'hogehoge';
                  });
                }
              })}
            </Unit>
          );
        })}
        <Unit>
          <TextLine></TextLine>
        </Unit>
      </Body>
    </Section>
  );
};

export default PrivacyPolicy;

const PageTitle = tw.h1`
  flex
  flex-col
  gap-6
`;

const PageTitleEn = tw.p`
  font-roboto
  text-[18px]
`;

const PageTitleJa = tw.p`
  font-roboto
  text-[50px]
  font-bold
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
`;
