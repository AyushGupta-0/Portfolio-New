"use client";

import { useState } from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { ProjectModal } from "./ui/ProjectModal";
import MagicButton from "./MagicButton";

const RecentProjects = () => {
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
      <div className="py-20" id="projects">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">Personal Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.filter(project => 
            project.id === 1 || // Assimilate Cryptocurrency Platform
            project.id === 10 || // NFT Marketplace
            project.id === 11 || // BeTimeful
            project.id === 12   // Bhaobhao
          ).map((item) => (
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
      <div className="flex justify-center mt-16">
        <Link href="/projects">
          <MagicButton
            title="View More Projects"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </div>

    <ProjectModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      project={selectedProject}
    />
    </>
  );
};

export default RecentProjects;
