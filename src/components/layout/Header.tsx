'use client';
import tw from 'twin.macro';
import Logo from '@/components/icon/logo.svg';
import { menuData } from '@/data/menu';
import Link from 'next/link';

export const Header = () => {
  return (
    <Container>
      <Inner>
        <Grid>
          <SiteLogo href="/">
            <Logo />
          </SiteLogo>
          <Menu>
            <MenuList>
              {menuData.map(({ id, label }) => (
                <li key={id}>
                  <a href={id}>{label}</a>
                </li>
              ))}
            </MenuList>
          </Menu>
        </Grid>
      </Inner>
    </Container>
  );
};

const Container = tw.header``;

const Inner = tw.div`
  max-w-content
  mx-auto
  py-6
`;

const Grid = tw.div`
  flex
  justify-between
  items-center
`;

const Menu = tw.nav`
`;

const MenuList = tw.ul`
  flex
  justify-between
  max-w-[600px]
  gap-10
`;

const MenuItem = tw(Link)`
  block
  w-[240px]
`;

const SiteLogo = tw(Link)`
  block
  w-[240px]
`;
