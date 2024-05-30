import tw from 'twin.macro';
import { Section } from '@/components/part/Section';
import { Heading } from '@/components/part/Heading';

import OriginalNoteLogo from '@/components/icon/note.svg';
import { Button, ButtonContainer } from '@/components/part/Button';

export const News = () => {
  return (
    <Section id="news">
      <Heading en="NEWS" ja="お知らせ" />
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
