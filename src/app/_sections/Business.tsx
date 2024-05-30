import tw from 'twin.macro';
import { Section } from '@/components/part/Section';
import { Heading } from '@/components/part/Heading';
import { TextBreak } from '@/lib/text';

const businessList: { index: number; title: string; description: string }[] = [
  {
    index: 1,
    title: 'Campus Everywhere構想の推進事業',
    description:
      '国内の大学間連携を進めることで、所属大学の所在地にとらわれずに展開する\n「学びのプラットフォーム」を提供していきます',
  },
  {
    index: 2,
    title: '大学経営・コンサルティング事業',
    description: '大学経営に関連するあらゆる事業を支援します',
  },
  {
    index: 3,
    title: '事業開発·運営支援事業',
    description:
      'あらゆる組織の事業立ち上げや新規事業開発、事業グロースを支援します',
  },
  {
    index: 4,
    title: 'グローバル事業',
    description:
      'アジア諸国のリサーチ支援やマーケティング・プロモーションの立案·実行を支援します',
  },
];

export const Business = () => {
  const [first, ...rest] = businessList;
  return (
    <Section id="business">
      <Heading en="BUSINESS" ja="事業内容" />
      <BusinessList>
        <BusinessItem>
          <BusinessTitle>
            <BusinessIndex tw="text-[34px] after:left-8">
              {first.index}
            </BusinessIndex>
            <BusinessName tw="text-[22px]">{first.title}</BusinessName>
          </BusinessTitle>
          <BusinessDescription tw="text-center text-[18px]">
            <TextBreak>{first.description}</TextBreak>
          </BusinessDescription>
        </BusinessItem>
        <BusinessListColumn>
          {rest.map(({ index, title, description }) => (
            <BusinessItem key={title}>
              <BusinessTitle>
                <BusinessIndex>{index}</BusinessIndex>
                <BusinessName>{title}</BusinessName>
              </BusinessTitle>
              <BusinessDescription>{description}</BusinessDescription>
            </BusinessItem>
          ))}
        </BusinessListColumn>
      </BusinessList>
    </Section>
  );
};

const BusinessList = tw.div`
  mt-[60px]
  flex
  flex-col
  gap-10
`;

const BusinessListColumn = tw.div`
  grid
  grid-cols-3
  gap-6
`;

const BusinessItem = tw.dl`
  flex
  flex-col
  gap-6
`;

const BusinessTitle = tw.dt`
  p-6
  relative
  bg-orange
`;

const BusinessIndex = tw.p`
  absolute
  top-2
  left-3
  leading-none
  font-roboto
  text-[22px]
  text-white

  after:content-['']
  after:block
  after:absolute
  after:h-full
  after:w-px
  after:rotate-45
  after:bg-white
  after:top-[10px]
  after:left-[20px]
`;

const BusinessName = tw.p`
  text-center
  text-[18px]
  font-bold
`;

const BusinessDescription = tw.dd`
`;
