'use client';

import Link from 'next/link';
import { HeaderEl, Nav, Brand, BrandMark, NavLinks, NavCta } from '../_styles';

type NavLink = { href: string; label: string };

type CommLabHeaderProps = {
  navLinks?: NavLink[];
  ctaButton?: { href: string; label: string };
};

export const CommLabHeader = ({ navLinks = [], ctaButton }: CommLabHeaderProps) => {
  return (
    <HeaderEl>
      <Nav>
        <Brand>
          <BrandMark />
          <Link href="/communication-lab">コミュニケーション・ラボ</Link>
        </Brand>
        <NavLinks>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </NavLinks>
        {ctaButton && (
          <NavCta href={ctaButton.href}>{ctaButton.label}</NavCta>
        )}
      </Nav>
    </HeaderEl>
  );
};
