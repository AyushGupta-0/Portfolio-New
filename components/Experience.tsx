"use client";

import React from "react";
import { workExperience } from "@/data";
import ExperienceCard from "./ui/ExperienceCard";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
        {workExperience.map((experience) => (
          <ExperienceCard
            key={experience.id}
            role={experience.role}
            company={experience.company}
            period={experience.period}
            icon={experience.icon}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
