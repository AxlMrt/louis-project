import React from "react";
import ProjectFeatures from "./ProjectFeatures";
import projects from "@/app/data/projectFeatures";

export default function MyProjectSection() {
  return (
    <section className="mb-20 p-12 mt-10">
      <h2 className="mb-16 text-center text-3xl font-bold">Mon projet</h2>

      {projects.map((project, index) => (
        <ProjectFeatures
          key={index}
          title={project.title}
          photo={project.photo}
          videoUrl={project.videoUrl}
          content={project.content}
          alignRight={project.alignRight}
        />
      ))}
    </section>
  );
}
