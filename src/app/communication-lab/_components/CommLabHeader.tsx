'use client';

import Link from 'next/link';
import Logo from '@/components/icon/logo.svg';
import { HeaderEl, Nav, Brand, NavLinks, NavCta } from '../_styles';

type NavLink = { href: string; label: string };

type CommLabHeaderProps = {
  navLinks?: NavLink[];
  ctaButton?: { href: string; label: string };
};

export const CommLabHeader = ({
  navLinks = [],
  ctaButton,
}: CommLabHeaderProps) => {
  return (
    <HeaderEl>
      <Nav>
        <Brand>
          <Link href="/communication-lab">
            <Logo />
          </Link>
          <span>コミュニケーション・ラボ</span>
        </Brand>
        <NavLinks>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </NavLinks>
        {ctaButton && <NavCta href={ctaButton.href}>{ctaButton.label}</NavCta>}
      </Nav>
    </HeaderEl>
  );
};
