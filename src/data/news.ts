export type NewsItem = {
  date: string;
  title: string;
  url?: string;
};

export const newsData: NewsItem[] = [
  {
    date: '2026.6.4',
    title: '大学生の新たな学びと挑戦の機会を広げるために、学習支援塾ビーンズと連携事業に関する基本合意書を締結',
    url: '/news/press-release-20260604.pdf',
  },
  {
    date: '2026.5.19',
    title:
      'JALと共同企画の「青空留学」、農林水産省の「農山漁村振興への貢献活動に係る取組証明書」を初取得',
    url: 'https://prtimes.jp/main/html/rd/p/000000006.000147910.html',
  },
  {
    date: '2025.7.24',
    title:
      '【開催報告】グラミー賞アーティスト ファンタスティック・ネグリート氏と大学生のイベントを早稲田大学社学ゼミと共同開催',
    url: 'https://prtimes.jp/main/html/rd/p/000000005.000147910.html',
  },
  {
    date: '2025.2.7',
    title:
      '【開催報告】宮崎県諸塚村にて、全国の大学生と地域をつなぐフィールドワークを実施しました',
    url: 'https://prtimes.jp/main/html/rd/p/000000001.000147910.html',
  },
  {
    date: '2024.9.14',
    title:
      '株式会社ウニベル、大学生が地方と都市を自由に行き来しながら新たな学びと挑戦の機会を広げる支援事業「Campus Everywhere 構想」を発表',
    url: 'https://prtimes.jp/main/html/rd/p/000000001.000147910.html',
  },
];