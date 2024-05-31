import tw from 'twin.macro';
import { Section } from '@/components/part/Section';
import { Heading } from '@/components/part/Heading';

// import tw from 'twin.macro';

const infoList: { title: string; definition: string }[] = [
  {
    title: '会社名',
    definition: '株式会社ウニベル / UNIVER inc.',
  },
  {
    title: '代表',
    definition: '横山真輔',
  },
  {
    title: '住所',
    definition: '〒169-0051 東京都新宿区西早稲田1-22-3',
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.322259824635!2d139.71881333626652!3d35.70898750999739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d536ca055f1%3A0x734f79646c9d5888!2z5pep56iy55Sw5aSn5a2m44Oq44K144O844OB44Kk44OO44OZ44O844K344On44Oz44K744Oz44K_44O877yIMTIx5Y-36aSo77yJ!5e0!3m2!1sja!2sjp!4v1717075013840!5m2!1sja!2sjp"
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
