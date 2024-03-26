import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  title: string;
  link: string;
}

export default function PageRedirection({ title, link }: Props) {
  return (
    <div className="mb-10">
      <Link href={link} className="flex items-center gap-3 w-20">
        <FaArrowLeft />
        <span>{title}</span>
      </Link>
    </div>
  );
}
