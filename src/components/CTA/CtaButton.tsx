import Link from "next/link";
import React from "react";
import { BsSend } from "react-icons/bs";

export default function CtaButton() {
  return (
    <div className="w-full flex justify-center align-center mt-16">
      <div className="mb-12 lg:mb-0">
        <Link
          href="/contact-me"
          className="mb-2 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md hover:cursor-pointer"
        >
          <BsSend size={25} />
        </Link>
        <h5 className="mb-4 text-lg font-bold">Me contacter</h5>
        <a className="text-neutral-500">Embarquez avec moi !</a>
      </div>
    </div>
  );
}
