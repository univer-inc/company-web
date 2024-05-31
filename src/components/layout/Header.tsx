'use client';
import tw from 'twin.macro';
import Logo from '@/components/icon/logo.svg';
import { menuData } from '@/data/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { styleMixins } from '@/lib/styleMixin';

export const Header = () => {
  const pathname = usePathname();
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
                  <MenuItem href={`${pathname === '/' ? '' : '/'}#${id}`}>
                    {label}
                  </MenuItem>
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
  lg-df:px-10
  sm-df:px-5
`;

const Grid = tw.div`
  flex
  justify-between
  items-center
`;

const Menu = tw.nav`
  md-df:hidden
`;

const MenuList = tw.ul`
  flex
  justify-between
  max-w-[600px]
  gap-10
`;

const MenuItem = styled(Link)`
  ${styleMixins.hoverEffect}
`;

const SiteLogo = tw(Link)`
  block
  w-[240px]
  sm-df:w-[146px]
`;
