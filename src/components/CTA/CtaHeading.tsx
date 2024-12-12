import React from "react";
import Image from "next/image";

import louisImage from "@/images/louis-hero.jpg";

export default function CtaHeading() {
  return (
    <div className="w-full shrink-0 grow-0 basis-auto">
      <div
        className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <Image src={louisImage} className="w-full" alt="skipper-picture" />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)] cursor-pointer"></div>
      </div>
    </div>
  );
}
