import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-cover bg-no-repeat main-bg">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.45)] bg-fixed">
        <div className="flex h-full items-center">
          <div className="px-6 text-left text-white md:px-12">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Objectif <br />
              <strong className="font-semibold">Grand large</strong>
            </h1>
            <p className="text-justify md:w-3/5 md:text-lg">
              La Mini Transat est bien plus qu&apos;un objectif personnel.
              C&apos;est une aventure partagée, une histoire à raconter, une
              expérience où chaque soutien, chaque encouragement est crucial.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
