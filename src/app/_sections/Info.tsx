import tw from 'twin.macro';
import { Section } from '@/components/part/Section';
import { Heading } from '@/components/part/Heading';
import { company, companyAddress, companyName } from '@/data/company';

// import tw from 'twin.macro';

const infoList: { title: string; definition: string }[] = [
  {
    title: '会社名',
    definition: companyName,
  },
  {
    title: '代表',
    definition: company.representative,
  },
  {
    title: '住所',
    definition: companyAddress,
  },
];

export const Info = () => {
  return (
    <Section id="info">
      <Heading en="COMPANY INFO" ja="企業情報" />
      <InfoArea>
        {infoList.map(({ title, definition }) => (
          <InfoItem key={title}>
            <InfoTitle>{title}</InfoTitle>
            <InfoDefinition>{definition}</InfoDefinition>
          </InfoItem>
        ))}
      </InfoArea>
      <MapArea>
        <GoogleMap
          src={company.mapEmbedUrl}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapArea>
    </Section>
  );
};

const InfoArea = tw.div`
  flex
  justify-between
  gap-4
  mt-[120px]
  sm-df:flex-col
  sm-df:mt-[60px]
`;

const InfoItem = tw.dl``;

const InfoTitle = tw.dt`
  text-sm
`;

const InfoDefinition = tw.dd`
  text-[18px]
  font-bold
`;

const MapArea = tw.div`
  mt-12
  ml-[calc(-50vw + 50%)]
  mr-[calc(-50vw + 50%)]
`;

const GoogleMap = tw.iframe`
  w-full
`;
