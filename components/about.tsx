"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-15 max-w-[50rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-4">
        I enjoy tinkering with ideas and turning them into real, working
        solutions. For me, learning is about pushing beyond my own limits and
        refining ideas until they reach their full potential.
      </p>

      <p className="mb-4">
        I am driven by real-world problems and enjoy breaking down complex
        challenges using technology. Solving a problem end-to-end gives me a
        strong sense of satisfaction and motivates me to take on more impactful
        challenges.
      </p>

      <p className="mb-4">
        I am particularly interested in backend development and building complex
        features using modern tech stacks. I enjoy understanding how technology
        creates value in the industry and how it can be applied to solve
        practical business problems.
      </p>

      <p className="mb-4">
        My journey began as a Project Management intern, where I worked on
        projects addressing real industry challenges. Since completing my
        graduation, I have continued building projects, experimenting with
        ideas, and creating custom solutions across different industries.
      </p>

      <p>
        Currently, I am seeking technical roles where I can contribute
        meaningfully to an organization, help drive growth, improve
        productivity, and support its long-term vision—while continuously
        learning and expanding my own skill set.
      </p>
    </motion.section>
  );
}
