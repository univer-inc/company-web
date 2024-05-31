import { styleMixins } from '@/lib/styleMixin';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Button = tw.a`
  flex
  gap-2
  justify-center
  items-center
  w-[520px]
  p-4
  text-center
  bg-orange
  rounded-[100px]
  text-xl
  sm-df:py-6
`;

export const ButtonContainer = styled.div`
  ${tw`
    py-8
    flex
    justify-center
    items-center`}
  ${styleMixins.hoverEffect}
`;
