import { FooterEl, FootGrid, Wrap } from '../_styles';

type CommLabFooterProps = {
  leftText?: string;
  rightText?: string;
};

export const CommLabFooter = ({
  leftText = '株式会社ウニベル コミュニケーション・ラボ',
  rightText = 'お問い合わせ',
}: CommLabFooterProps) => {
  return (
    <FooterEl>
      <Wrap>
        <FootGrid>
          <div>{leftText}</div>
          <div>{rightText}</div>
        </FootGrid>
      </Wrap>
    </FooterEl>
  );
};
