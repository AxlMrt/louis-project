import React from "react";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="px-12 py-6">
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <a
            href="https://www.axel-martin.fr"
            target="_blank"
            className="hover:underline"
          >
            Axel Martin
          </a>
          . All Rights Reserved.
        </span>
        <FooterLinks />
      </div>
    </footer>
  );
}
