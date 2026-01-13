"use client";

import React from "react";
import { techStackTop, techStackBottom } from "@/data";
import { TechStackCarousel } from "./ui/TechStackCarousel";

const TechStack = () => {
  return (
    <section className="py-20 w-full">
      <div className="flex flex-col gap-8">
        {/* Top Carousel - Left to Right */}
        <TechStackCarousel
          items={techStackTop}
          direction="left"
          speed="slow"
        />
        
        {/* Bottom Carousel - Right to Left */}
        <TechStackCarousel
          items={techStackBottom}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default TechStack;

