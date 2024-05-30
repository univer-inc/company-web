import tw from 'twin.macro';
import { Section } from '@/components/part/Section';
import { Heading } from '@/components/part/Heading';

import OriginalNoteLogo from '@/components/icon/note.svg';
import { Button, ButtonContainer } from '@/components/part/Button';

export const Contact = () => {
  return (
    <Section id="contact">
      <Heading en="CONTACT" ja="お問い合わせ" />
      <ButtonContainer>
        <Button href="https://forms.gle/q5X4HJAvN6ZwK3FU7" target="_blank">
          <p>お問い合わせはこちら</p>
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
