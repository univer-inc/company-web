type MenuItem = {
  label: string;
  id: string;
  href?: string;
};

export const menuData: MenuItem[] = [
  {
    label: '企業情報',
    id: 'info',
  },
  {
    label: '事業内容',
    id: 'business',
  },
  {
    label: 'お知らせ',
    id: 'news',
  },
  {
    label: 'お問い合わせ',
    id: 'contact',
  },
  {
    label: 'コミュニケーション・ラボ',
    id: 'communication-lab',
    href: '/communication-lab',
  },
];

export const footerData: MenuItem[] = [
  {
    label: 'プライバシーポリシー',
    id: 'privacy-policy',
  },
];

export const copyrightText = `copyright ${new Date().getFullYear()} UNIVER Inc.`;
