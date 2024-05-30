import React from 'react';
import tw from 'twin.macro';

export const TextBreak = ({ children }: { children: string }): JSX.Element => {
  const arr = children.split(/\n/);
  return (
    <>
      {arr.map((textFragment, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>
          {textFragment}
          {index < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};

export const RemoveTextBreak = ({
  children,
}: {
  children: string;
}): JSX.Element => {
  const result = children.replace(/\\n/, '');
  return <>{result}</>;
};

export const BrOnlySmallScreen = tw.br`hidden md:inline`;
export const BrOnlyNormalScreen = tw.br`md:hidden`;
