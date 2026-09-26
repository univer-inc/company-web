import { sendGAEvent } from '@next/third-parties/google';

type CtaClickParams = {
  label: string;
  location: string;
  url: string;
};

export const trackCtaClick = ({ label, location, url }: CtaClickParams) => {
  sendGAEvent('event', 'cta_click', {
    event_category: 'apply',
    event_label: label,
    cta_location: location,
    link_url: url,
  });
};
