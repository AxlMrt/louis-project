import React from "react";

import CtaButton from "./CtaButton";
import CtaHeading from "./CtaHeading";
import CtaTitle from "./CtaTitle";

export default function CtaSection() {
  return (
    <section className="mb-20 text-center px-12">
      <div className="mb-12 flex flex-wrap justify-center">
        <CtaHeading />
        <CtaTitle />
        <CtaButton />
      </div>
    </section>
  );
}
