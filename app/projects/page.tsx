"use client";

import { useState } from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { navItems } from "@/data";

import { projects } from "@/data";
import { PinContainer } from "@/components/ui/Pin";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          
          <div className="py-20 mt-20">
            <h1 className="heading">
              All <span className="text-purple">Projects</span>
            </h1>
            <p className="text-center text-white-200 mt-4 mb-10">
              A comprehensive collection of my personal work and projects
            </p>
            
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
              {projects.map((item) => (
                <div
                  className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] cursor-pointer"
                  key={item.id}
                  onClick={() => handleProjectClick(item)}
                >
                  <PinContainer
                    title="Visit"
                    href={item.link}
                  >
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="/bg.png" alt="bgimg" />
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4 whitespace-pre-line"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </a>
                  </div>
                  </PinContainer>
                </div>
              ))}
          </div>
        </div>
        
        <Footer />
      </div>
    </main>

    <ProjectModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      project={selectedProject}
    />
    </>
  );
};

export default ProjectsPage;

