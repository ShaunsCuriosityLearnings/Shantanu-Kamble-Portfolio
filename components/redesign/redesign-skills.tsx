"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

interface RedesignSkillsProps {
  headingFontClass: string;
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
      duration: 0.35,
    },
  }),
};

export default function RedesignSkills({
  headingFontClass,
}: RedesignSkillsProps) {
  return (
    <section id="skills" className="w-full px-[4%] sm:px-[5%] py-8 border-t border-zinc-900">
      <div className="text-center max-w-3xl mx-auto mb-6">
        <span className="text-xs uppercase tracking-widest text-red-500 font-bold">
          CORE CAPABILITIES
        </span>
        <h2
          className={`${headingFontClass} text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-1`}
        >
          Technical & Growth Stack
        </h2>
      </div>

      {/* STAGGERED ANIMATED SKILL BADGES */}
      <div className="flex flex-wrap justify-center gap-2.5 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ scale: 1.05, y: -2 }}
            className="group relative px-3.5 py-2 rounded-full border border-zinc-800 bg-[#101014] hover:border-red-500/50 hover:bg-red-950/20 text-zinc-300 hover:text-white transition-all duration-200 shadow-sm cursor-default flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/70 group-hover:bg-red-400 transition-colors" />
            <span className="text-xs font-mono font-medium tracking-wide uppercase">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
