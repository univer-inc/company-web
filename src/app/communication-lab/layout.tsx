import type { Metadata } from 'next';
import './_styles/global.css';

export const metadata: Metadata = {
  title: 'コミュニケーション・ラボ | 株式会社ウニベル',
  description:
    'コミュニケーション・ラボは、自分の中にある考えや思いを引き出し、整理し、相手に届く言葉へ育てるコミュニケーションプログラムです。',
};

export default function CommunicationLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
