"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import ALL components to avoid SSR issues
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar").then(mod => ({ default: mod.FloatingNav })), {
  ssr: false
});

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false
});

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false
});

const TechStack = dynamic(() => import("@/components/TechStack"), {
  ssr: false
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false
});

const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false
});

const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false
});

const Approach = dynamic(() => import("@/components/Approach"), {
  ssr: false
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false
});

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
        <div className="max-w-7xl w-full">
          {/* Loading state */}
        </div>
      </main>
    );
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <TechStack />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
