"use client";

import tw from "twin.macro";

export default function Home() {
  return (
    <Main>
      <div className="text-white text-5xl font-bold">UNIVER inc. Website</div>
    </Main>
  );
}

const Main = tw.main`bg-amber-400`;
