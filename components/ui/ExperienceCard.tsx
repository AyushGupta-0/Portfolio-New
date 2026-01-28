"use client";

import React, { useState } from "react";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  icon: string;
  description: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  period,
  icon,
  description,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div className="flip-card-container h-[280px] md:h-[320px]">
      <div
        className={`flip-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`${role} at ${company}. Click to ${
          isFlipped ? "see summary" : "see details"
        }`}
      >
        {/* Front Face */}
        <div className="flip-card-front">
          <div className="relative w-full h-full rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden border border-white/[0.1] group hover:shadow-2xl hover:shadow-purple/20 transition-all duration-300">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black-100 via-[#0d1224] to-black-200" />

            {/* Animated Border Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[-2px] bg-gradient-to-r from-purple via-blue-500 to-purple rounded-3xl blur-sm" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple/20 to-blue-500/20 flex items-center justify-center mb-4 border border-white/[0.1]">
                <img
                  src={icon}
                  alt={company}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>

              {/* Role & Company */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {role}
                </h3>
                <p className="text-purple text-base md:text-lg font-semibold">
                  {company}
                </p>
              </div>
            </div>

            {/* Period & Hint */}
            <div className="relative z-10">
              <p className="text-white-200 text-sm md:text-base mb-2">
                {period}
              </p>
              <p className="text-white-100/60 text-xs md:text-sm flex items-center gap-1">
                <span className="inline-block animate-pulse">👆</span>
                Tap to see what I did
              </p>
            </div>

            {/* Decorative Gradient Orb */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-purple/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Back Face */}
        <div className="flip-card-back">
          <div className="relative w-full h-full rounded-3xl p-6 md:p-8 flex flex-col overflow-hidden border border-white/[0.1] group">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-[#0d1224] to-black-200" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="mb-4">
                <h4 className="text-lg md:text-xl font-bold text-purple mb-1">
                  What I did
                </h4>
                <div className="w-12 h-1 bg-gradient-to-r from-purple to-transparent rounded-full" />
              </div>

              {/* Description List */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <ul className="space-y-2 md:space-y-3">
                  {description.map((item, index) => (
                    <li
                      key={index}
                      className="text-white-100 text-xs md:text-sm flex items-start gap-2"
                    >
                      <span className="text-purple mt-1 flex-shrink-0">▹</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back Hint */}
              <div className="mt-4 pt-3 border-t border-white/[0.1]">
                <p className="text-white-100/60 text-xs md:text-sm flex items-center gap-1">
                  <span className="inline-block animate-pulse">👆</span>
                  Tap to flip back
                </p>
              </div>
            </div>

            {/* Decorative Gradient Orb */}
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-purple/20 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .flip-card-container {
          perspective: 1000px;
          -webkit-perspective: 1000px;
        }

        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          cursor: pointer;
        }

        .flip-card.flipped {
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }

        .flip-card-back {
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
        }

        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(203, 172, 249, 0.5);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(203, 172, 249, 0.8);
        }
      `}</style>
    </div>
  );
};

export default ExperienceCard;
