'use client';

import Link from 'next/link';
import Logo from '@/components/icon/logo.svg';
import { HeaderEl, Nav, Brand, NavLinks, NavCta } from '../_styles';

type NavLink = { href: string; label: string };

type CtaButton = {
  href: string;
  label: string;
  target?: string;
  rel?: string;
};

type CommLabHeaderProps = {
  navLinks?: NavLink[];
  ctaButton?: CtaButton;
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
        {ctaButton && (
          <NavCta href={ctaButton.href} target={ctaButton.target} rel={ctaButton.rel}>
            {ctaButton.label}
          </NavCta>
        )}
      </Nav>
    </HeaderEl>
  );
};
