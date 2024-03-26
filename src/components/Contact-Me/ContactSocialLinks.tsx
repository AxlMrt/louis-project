import socialLinks from "@/app/data/socialLinks";
import Link from "next/link";
import React from "react";

export default function ContactSocialLinks() {
  return (
    <div className="flex mt-4 ">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.class} mr-2`}
        >
          {React.createElement(link.icon, {
            size: 25,
          })}
        </Link>
      ))}
    </div>
  );
}
