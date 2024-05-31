import tw from 'twin.macro';

export const styleMixins = {
  hoverEffect: tw`
    transition-opacity
    ease-in-out
    duration-300
    opacity-100
    hover:opacity-60
    md:opacity-100
  `,
} as const;
