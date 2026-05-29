"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  const cards = [
    {
      title: "Problem Solving",
      description:
        "I enjoy breaking down real-world business challenges and building solutions that create measurable impact.",
    },
    {
      title: "Performance Marketing",
      description:
        "From Meta Ads to scalable funnels, I focus on growth systems that drive conversions and revenue.",
    },
    {
      title: "Development & AI",
      description:
        "I build websites, automation systems, AI workflows, and scalable tech solutions using modern technologies.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="pt-10 pb-20 px-6 scroll-mt-28"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADING */}
        <div className="mb-16">
          <SectionHeading>About Me</SectionHeading>

          <h2 className="text-4xl sm:text-5xl font-bold mt-6 leading-tight text-gray-950 dark:text-white">
            Building Ideas Into
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Real Digital Solutions
            </span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-lg leading-8 text-gray-700 dark:text-white/75">
            <p>
              I enjoy exploring ideas and transforming them into practical,
              scalable solutions. For me, learning is not just about gaining
              knowledge — it's about constantly pushing boundaries and improving
              through experimentation.
            </p>

            <p>
              My journey started as a Project Management intern, where I worked
              on projects solving real industry problems. Since then, I've been
              building products, experimenting with automation, and creating
              technology-driven solutions across multiple domains.
            </p>

            <p>
              Today, I work at the intersection of{" "}
              <span className="text-gray-950 dark:text-white font-semibold">
                software development, AI, and performance marketing
              </span>{" "}
              to help businesses grow through scalable systems and modern
              digital experiences.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 pt-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-950 dark:text-white">
                  ₹10L+
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/60">
                  Managed in Ad Spend
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-950 dark:text-white">
                  20+
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/60">
                  Projects & Solutions
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-950 dark:text-white">
                  AI + Tech
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/60">
                  Focused Innovation
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="space-y-5">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="
                  rounded-3xl
                  border border-black/5 dark:border-white/10
                  bg-white/70 dark:bg-white/5
                  backdrop-blur-xl
                  p-8
                  transition
                  shadow-lg
                "
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-950 dark:text-white">
                  {card.title}
                </h3>

                <p className="text-gray-600 dark:text-white/65 leading-7">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
