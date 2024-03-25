import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-12 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Claudepierre.L
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <a
            href="#"
            className="hidden text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Me contacter
          </a>
          <a
            href="mailto:objectif.grand.large@gmail.com"
            target="_blank"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Devenir Sponsor
          </a>
        </div>
      </div>
    </nav>
  );
}
