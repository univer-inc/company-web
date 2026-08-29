import tw from 'twin.macro';
import { Section } from '@/components/part/Section';
import { Heading } from '@/components/part/Heading';
import { newsData } from '@/data/news';

import OriginalNoteLogo from '@/components/icon/note.svg';
import { Button, ButtonContainer } from '@/components/part/Button';

export const News = () => {
  return (
    <Section id="news">
      <Heading en="NEWS" ja="お知らせ" />
      <NewsList>
        {newsData.map((item) => (
          <NewsRow key={item.date}>
            <NewsTitle>{item.date}</NewsTitle>
            <NewsBody>
              {item.url ? (
                <NewsLink href={item.url} target="_blank">
                  {item.title}
                </NewsLink>
              ) : (
                <NewsText>{item.title}</NewsText>
              )}
            </NewsBody>
          </NewsRow>
        ))}
      </NewsList>
      <ButtonLead>公式noteで最新情報を発信中！</ButtonLead>
      <ButtonContainer>
        <Button
          href="https://note.com/univer_ce47/m/m9de406ba42d6"
          target="_blank"
        >
          <p>UNIVER公式</p>
          <NoteLogo />
        </Button>
      </ButtonContainer>
    </Section>
  );
};

const NoteLogo = tw(OriginalNoteLogo)`
  w-[90px]
`;

const ButtonLead = tw.p`
  mt-4
  text-center
`;

const NewsList = tw.div`
  flex
  flex-col
  gap-6
  mx-12
  my-16
  sm-df:mx-3
`;

const NewsRow = tw.dl`
  flex
  gap-12
  items-start
  sm-df:flex-col
  sm-df:gap-1
`;

const NewsTitle = tw.dt`
  shrink-0
  min-w-[9ch]
  tabular-nums
  text-xl
  font-bold
`;

const NewsBody = tw.dd`
  flex-1
  text-lg
`;

const NewsLink = tw.a`
  hover:underline
`;

const NewsText = tw.span`
  text-lg
`;