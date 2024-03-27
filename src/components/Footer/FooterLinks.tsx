import footerSocialLinks from "@/app/data/footerSocialLinks";
import socialLinks from "@/app/data/socialLinks";
import Link from "next/link";
import React from "react";

export default function FooterLinks() {
  return (
    <div className="flex mt-4 sm:justify-center sm:mt-0 gap-x-2">
      {footerSocialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.class}`}
        >
          {React.createElement(link.icon, {
            size: 15,
          })}
        </Link>
      ))}
    </div>
  );
}
