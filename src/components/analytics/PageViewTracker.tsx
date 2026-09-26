'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { sendGAEvent } from '@next/third-parties/google';

export const PageViewTracker = () => {
  const pathname = usePathname();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GA_ID) return;

    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    sendGAEvent('event', 'page_view', {
      page_path: pathname,
      page_location: `${window.location.origin}${pathname}`,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
};
