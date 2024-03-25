import socialLinks from "@/app/data/socialLinks";
import Link from "next/link";
import React from "react";

export default function FooterLinks() {
  return (
    <div className="flex mt-4 sm:justify-center sm:mt-0 gap-x-2">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 cursor-pointer"
        >
          {React.createElement(link.icon, { size: 20, className: link.color })}
        </Link>
      ))}
    </div>
  );
}
