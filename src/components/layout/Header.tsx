'use client';
import tw from 'twin.macro';
import Logo from '@/components/icon/logo.svg';
import { menuData } from '@/data/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import { styleMixins } from '@/lib/styleMixin';

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuHref = (id: string) => `${pathname === '/' ? '' : '/'}#${id}`;

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
                  <MenuItem href={menuHref(id)}>{label}</MenuItem>
                </li>
              ))}
            </MenuList>
          </Menu>
          <MenuButton
            type="button"
            aria-label="メニューを開く"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <span />
            <span />
          </MenuButton>
        </Grid>
      </Inner>
      <MobileMenu aria-hidden={!isOpen} $open={isOpen}>
        <MobileMenuInner>
          <MobileMenuHeader>
            <MobileLogo href="/">
              <Logo />
            </MobileLogo>
            <CloseButton
              type="button"
              aria-label="メニューを閉じる"
              onClick={() => setIsOpen(false)}
            >
              <span />
              <span />
            </CloseButton>
          </MobileMenuHeader>
          <MobileMenuList>
            {menuData.map(({ id, label }) => (
              <li key={id}>
                <MobileMenuItem
                  href={menuHref(id)}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </MobileMenuItem>
              </li>
            ))}
          </MobileMenuList>
        </MobileMenuInner>
      </MobileMenu>
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

const MenuButton = styled.button`
  ${tw`
    hidden
    md-df:flex
    flex-col
    justify-center
    items-center
    gap-1.5
    w-10
    h-10
    cursor-pointer
    border-0
    p-0
  `}
  background-color: transparent;
  span {
    display: block;
    width: 28px;
    height: 3px;
    background-color: #231815;
    transition: all 0.3s ease-in-out;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  ${tw`
    fixed
    inset-0
    z-90
    bg-white
    overflow-y-auto
    transition-opacity
    duration-300
    ease-in-out
  `}
  opacity: ${({ $open }) => ($open ? '1' : '0')};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
`;

const MobileMenuInner = tw.div`
  min-h-full
  px-5
  py-6
`;

const MobileMenuHeader = tw.div`
  flex
  justify-between
  items-center
  mb-16
`;

const MobileLogo = tw(Link)`
  block
  w-[146px]
`;

const CloseButton = styled.button`
  ${tw`
    flex
    justify-center
    items-center
    w-10
    h-10
    cursor-pointer
    border-0
    p-0
    relative
  `}
  background-color: transparent;
  span {
    position: absolute;
    display: block;
    width: 28px;
    height: 3px;
    background-color: #231815;
  }
  span:first-child {
    transform: rotate(45deg);
  }
  span:last-child {
    transform: rotate(-45deg);
  }
`;

const MobileMenuList = tw.ul`
  grid
  grid-cols-2
  gap-x-6
  gap-y-10
`;

const MobileMenuItem = styled(Link)`
  ${tw`
    block
    text-[20px]
    font-bold
    pl-3
    border-l-4
    border-orange
    pb-1
  `}
  ${styleMixins.hoverEffect}
`;
