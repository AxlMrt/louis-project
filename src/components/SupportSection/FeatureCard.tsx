import React from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: Props) {
  return (
    <div className="mb-12 lg:mb-0">
      <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="flex justify-center">
          <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
            {React.createElement(icon, { size: 25 })}
          </div>
        </div>
        <div className="p-6">
          <h5 className="mb-4 text-lg font-semibold">{title}</h5>
          <p className="text-neutral-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
