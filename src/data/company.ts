export const company = {
  name: '株式会社ウニベル',
  nameEn: 'UNIVER inc.',
  representative: '横山真輔',
  postalCode: '〒163-1302',
  address: '東京都新宿区西新宿6-5-1 新宿アイランドタワー2階',
  email: 'shinsuke.yokoyama(アットマーク)univer-inc.com',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3446163787958!2d139.69056707578395!3d35.693136329319955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd57ca23f51%3A0x92e37e24b01c24ee!2z5paw5a6_44Ki44Kk44Op44Oz44OJ44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1790754194842!5m2!1sja!2sjp',
} as const;

export const companyName = `${company.name} / ${company.nameEn}`;

export const companyAddress = `${company.postalCode} ${company.address}`;
