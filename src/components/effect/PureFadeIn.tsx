import tw from 'twin.macro';
import { isNumber } from '@/lib/typeCheck';
import styled, { css } from 'styled-components';

export const PureFadeIn = styled.div<{
  $isShow?: boolean;
  $scaling?: boolean;
  $delay?: number;
}>(({ $isShow = false, $scaling = false, $delay }) => [
  tw`
    w-full
    h-full
    transition-all
    // 動的に出せない…
    duration-1000
    origin-center
    ease-in-out
  `,
  $isShow ? tw`opacity-100 translate-y-0` : tw`opacity-0 translate-y-6`,
  $scaling && $isShow ? tw`scale-100` : tw`scale-95`,
  isNumber($delay)
    ? css`
        transition-delay: ${$delay}ms;
      `
    : '',
]);
