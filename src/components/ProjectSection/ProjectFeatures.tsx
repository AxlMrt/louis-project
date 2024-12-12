import Image, { StaticImageData } from "next/image";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  photo?: StaticImageData;
  videoUrl?: string;
  content: {
    icon: IconType;
    type: string;
    engagement: string;
    paragraphs: string[];
  };
  alignRight: boolean;
}

export default function ProjectFeatures({
  title,
  photo,
  videoUrl,
  content,
  alignRight,
}: Props) {
  return (
    <div
      className={`mb-16 flex flex-wrap ${
        alignRight ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:px-6">
        {videoUrl ? (
          <div className="relative overflow-hidden rounded-lg">
            <iframe
              src={videoUrl}
              allowFullScreen
              className="w-full h-72"
              title="YouTube video player"
            ></iframe>
          </div>
        ) : (
          <div
            className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {photo && <Image src={photo} className="w-full" alt="Project" />}
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 cursor-pointer"></div>
          </div>
        )}
      </div>

      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-6">
        <h3 className="mb-4 text-2xl font-bold">{title}</h3>
        <div className="mb-4 flex items-center text-sm font-medium text-primary">
          {React.createElement(content.icon, { className: "mr-2" })}
          {content.type}
        </div>
        <p className="mb-6 text-sm text-neutral-500">
          <u>{content.engagement}</u>
        </p>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-neutral-500 text-justify mt-3">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
