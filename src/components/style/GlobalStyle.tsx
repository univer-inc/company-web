'use client';

import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as TwinGlobalStyles } from 'twin.macro';

export const GlobalStyles = () => {
  return (
    <>
      <TwinGlobalStyles />
      <Global />
    </>
  );
};

const Global = createGlobalStyle`
body {
  ${tw`
    font-sans
    text-justify
  `}/* font-feature-settings: 'palt'; */
  }
`;
