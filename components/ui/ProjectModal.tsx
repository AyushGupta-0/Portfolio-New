"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { ImageSlider } from "./ImageSlider";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    des: string | string[];
    img: string;
    images?: string[];
    link: string;
    iconLists: string[];
  } | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-[9999] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.1] bg-black-200/95 backdrop-blur-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <IoClose className="text-white text-2xl" />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Image Slider */}
                <div className="mb-8">
                  <ImageSlider
                    images={project.images && project.images.length > 0 ? project.images : [project.img]}
                    title={project.title}
                  />
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {project.title}
                </h1>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-purple mb-4">Description</h2>
                  <div className="text-white-200 text-lg leading-relaxed space-y-3">
                    {Array.isArray(project.des) ? (
                      <ul className="list-none space-y-2">
                        {project.des.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="list-none space-y-2">
                        {project.des.split('\n').filter(line => line.trim()).map((line, index) => (
                          <li key={index}>{line.trim()}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-purple mb-4">Tech Stack</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
                      >
                        <img src={icon} alt="tech icon" className="p-2" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Site Link */}
                <div className="flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                  >
                    <span>Visit Live Site</span>
                    <FaLocationArrow />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
  );
};

