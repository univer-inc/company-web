'use client';
import tw from 'twin.macro';
import { footerData } from '@/data/menu';
import Link from 'next/link';
import styled from 'styled-components';
import { styleMixins } from '@/lib/styleMixin';

export const Footer = () => {
  return (
    <Container>
      <Inner>
        <FooterNav>
          <FooterList>
            <FooterListItem tw="text-sm">
              copyright {new Date().getFullYear()} UNIVER Inc.
            </FooterListItem>
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
  lg-df:px-10
  sm-df:px-5
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
  sm-df:flex-col-reverse
`;

const FooterListItem = tw.li`
`;

const FooterLink = styled(Link)`
  ${tw`
    block
    sm-df:text-center
  `}
  ${styleMixins.hoverEffect}
`;
