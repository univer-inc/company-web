import tw from 'twin.macro';
import { Section } from '@/components/part/Section';
import { Heading } from '@/components/part/Heading';

import OriginalNoteLogo from '@/components/icon/note.svg';
import { Button, ButtonContainer } from '@/components/part/Button';

export const News = () => {
  return (
    <Section id="news">
      <Heading en="NEWS" ja="お知らせ" />
      <NewsList>
        <NewsTitle>2024.9.14</NewsTitle>
        <NewsBody>
          <NewsLink
            href="https://prtimes.jp/main/html/rd/p/000000001.000147910.html"
            target="_blank"
          >
            株式会社ウニベル、大学生が地方と都市を自由に行き来しながら新たな学びと挑戦の機会を広げる支援事業「Campus
            Everywhere 構想」を発表
          </NewsLink>
        </NewsBody>
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

const NewsList = tw.dl`
  flex
  gap-12
  items-center
  mx-12
  my-16
  sm-df:flex-col
  sm-df:items-start
  sm-df:gap-6
  sm-df:mx-3
`;

const NewsTitle = tw.dt`
  text-xl
  font-bold
`;

const NewsBody = tw.dd`
  text-lg
`;

const NewsLink = tw.a`
  hover:underline
`;
