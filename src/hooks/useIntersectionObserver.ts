import { useEffect, useRef } from 'react';

export const useIntersectionObserver = <T extends Element = HTMLElement>(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit & {
    once?: boolean;
  },
) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    const current = ref.current;

    const clear = () => {
      if (current) {
        observer.unobserve(current);
      }
    };

    const observer = new IntersectionObserver((arg, observer) => {
      callback(arg, observer);
      if (arg[0] && arg[0].isIntersecting && options?.once) {
        clear();
      }
    }, options);

    if (current) {
      observer.observe(current);
    }
    return clear;
  }, []);
  return ref;
};
