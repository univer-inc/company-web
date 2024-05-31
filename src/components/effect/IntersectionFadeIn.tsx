import { useEffect } from 'react';
import { useIntersectionObserver, useIrreversibleFlag } from '@/hooks';
import { PureFadeIn } from './PureFadeIn';

const DURATION = 1000;

// root marginについて
// https://www.webdesignleaves.com/pr/jquery/intersectionObserverAPI-basic.html

type IntersectionFadeInProps = {
  children: React.ReactNode;
  observerOptions?: IntersectionObserverInit;
  once?: boolean;
  delay?: number;
  scaling?: boolean;
  onFadeIn?: () => void;
  onFadeInStrict?: () => void;
};
export const IntersectionFadeIn = ({
  observerOptions,
  once = true,
  onFadeIn,
  onFadeInStrict,
  delay,
  scaling = false,
  children,
}: IntersectionFadeInProps) => {
  const [hasShown, setHasShown] = useIrreversibleFlag();
  useEffect(() => {
    if (hasShown && onFadeIn) {
      // 厳密なtransitionendだと体感遅いので
      setTimeout(onFadeIn, DURATION * 0.65);
    }
  }, [hasShown]);

  const ref = useIntersectionObserver<HTMLDivElement>(
    ([{ isIntersecting }]) => {
      if (!hasShown && isIntersecting) setHasShown();
    },
    {
      threshold: 0,
      // デフォルトではビューポート下30%のラインを超えたら表示する
      rootMargin: '-40% 0px',
      once,
      ...observerOptions,
    },
  );

  return (
    <PureFadeIn
      $scaling={scaling}
      $isShow={hasShown}
      $delay={delay}
      onTransitionEnd={onFadeInStrict}
      ref={ref}
    >
      {children}
    </PureFadeIn>
  );
};
