'use client';
import tw from 'twin.macro';
import { footerData } from '@/data/menu';
import Link from 'next/link';

export const Footer = () => {
  return (
    <Container>
      <Inner>
        <FooterNav>
          <FooterList>
            {footerData.map(({ id, label }) => (
              <FooterListItem key={id}>
                <FooterLink href={`/${id}`}>{label}</FooterLink>
              </FooterListItem>
            ))}
          </FooterList>
        </FooterNav>
      </Inner>
    </Container>
  );
};

const Container = tw.footer``;

const Inner = tw.div`
  max-w-content
  mx-auto
  py-6
`;

const FooterNav = tw.nav`
  flex
  justify-center
  gap-5
`;

const FooterList = tw.ul`
  flex
  justify-between
  gap-10
`;

const FooterListItem = tw.li`
`;

const FooterLink = tw(Link)`
  block
`;
