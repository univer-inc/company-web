import Link from 'next/link';
import { URLS } from '@/data/urls';
import { copyrightText } from '@/data/menu';
import { FooterEl, FootGrid, FootCopy, Wrap } from '../_styles';

type CommLabFooterProps = {
  leftText?: string;
  rightText?: string;
  contactUrl?: string;
};

export const CommLabFooter = ({
  leftText = '株式会社ウニベル',
  rightText = 'お問い合わせ',
  contactUrl = URLS.contactForm,
}: CommLabFooterProps) => {
  return (
    <FooterEl>
      <Wrap>
        <FootGrid>
          <Link href="/">{leftText}</Link>
          <div>
            <Link href={contactUrl} target="_blank" rel="noopener noreferrer">
              {rightText}
            </Link>
          </div>
        </FootGrid>
        <FootCopy>{copyrightText}</FootCopy>
      </Wrap>
    </FooterEl>
  );
};
