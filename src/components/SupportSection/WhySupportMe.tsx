import supportFeatures from "@/app/data/supportFeatureCard";
import React from "react";
import FeatureCard from "./FeatureCard";

export default function WhySupportMe() {
  return (
    <section className="px-12 mb-32 text-center">
      <h2 className="mb-20 text-3xl font-bold">Pourquoi me soutenir ?</h2>
      <div className="grid lg:grid-cols-3 lg:gap-x-12">
        {supportFeatures.map((feature, index) => (
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
