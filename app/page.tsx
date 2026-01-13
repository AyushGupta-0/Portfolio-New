"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";

// Dynamically import FloatingNav to avoid SSR issues
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar").then(mod => ({ default: mod.FloatingNav })), {
  ssr: false
});

const Home = () => {
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
