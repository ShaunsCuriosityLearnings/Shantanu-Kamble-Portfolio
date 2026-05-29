"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import {
  FaRobot,
  FaBullhorn,
  FaWhatsapp,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";

const systems = [
  {
    id: 1,
    title: "Lead Qualification Chatbots",
    icon: <FaRobot />,
    short: "AI Lead Systems",
    description:
      "Built intelligent lead qualification chatbots capable of handling 24/7 communication, customer support, service catalog exploration, CRM integration, and automated lead segmentation from Meta and Google Ads.",
  },
  {
    id: 2,
    title: "Marketing & Sales Automation",
    icon: <FaBullhorn />,
    short: "Marketing Bots",
    description:
      "Developed AI-powered marketing bots for customer engagement, appointment booking, lead nurturing, WhatsApp automations, and automated sales funnels.",
  },
  {
    id: 3,
    title: "Student Management Systems",
    icon: <FaGraduationCap />,
    short: "EdTech AI",
    description:
      "Created AI-powered educational platforms featuring attendance tracking, quiz systems, doubt-solving assistants, and student lifecycle management.",
  },
  {
    id: 4,
    title: "Survey & Research Bots",
    icon: <FaChartLine />,
    short: "Research AI",
    description:
      "Built conversational survey systems that automate data collection, customer feedback, market research, and analytics reporting.",
  },
  {
    id: 5,
    title: "WhatsApp Automation",
    icon: <FaWhatsapp />,
    short: "WhatsApp AI",
    description:
      "Designed WhatsApp-based automation workflows for customer support, reminders, lead qualification, appointment booking, and follow-ups.",
  },
];

export default function Experience() {
  const { ref } = useSectionInView("Automation");
  const [selected, setSelected] = useState(systems[0]);

  return (
    <section id="automation" ref={ref} className="scroll-mt-28 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <SectionHeading>AI Automations</SectionHeading>

          <h2 className="text-4xl sm:text-6xl font-bold mt-6 text-gray-950 dark:text-white">
            Intelligent Systems Built For
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Automation & Scale
            </span>
          </h2>

          <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-600 dark:text-white/60">
            AI agents, lead qualification systems, WhatsApp automation,
            educational platforms, and business workflows connected through a
            scalable automation ecosystem.
          </p>
        </div>
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* NETWORK */}
          <div
            className="
      relative
      h-[420px]
      sm:h-[500px]
      md:h-[550px]
      lg:h-[600px]
    "
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 600"
            >
              <line
                x1="400"
                y1="300"
                x2="200"
                y2="150"
                stroke="#22d3ee55"
                strokeWidth="2"
              />
              <line
                x1="400"
                y1="300"
                x2="600"
                y2="150"
                stroke="#22d3ee55"
                strokeWidth="2"
              />
              <line
                x1="400"
                y1="300"
                x2="600"
                y2="470"
                stroke="#22d3ee55"
                strokeWidth="2"
              />
              <line
                x1="400"
                y1="300"
                x2="200"
                y2="470"
                stroke="#22d3ee55"
                strokeWidth="2"
              />
              <line
                x1="400"
                y1="300"
                x2="400"
                y2="70"
                stroke="#22d3ee55"
                strokeWidth="2"
              />
            </svg>

            {/* CENTER */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-28 h-28
        sm:w-32 sm:h-32
        md:w-36 md:h-36
        lg:w-44 lg:h-44
        rounded-full
        border
        border-cyan-400/30
        bg-white
        dark:bg-white/5
        backdrop-blur-xl
        flex
        flex-col
        items-center
        justify-center
        shadow-[0_0_60px_rgba(34,211,238,.25)]
        z-20
      "
            >
              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
                ⚡
              </div>

              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                AI CORE
              </h3>

              <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-white/60">
                Automation Engine
              </p>
            </motion.div>

            {/* NODES */}
            {[
              { system: systems[0], pos: "left-[10%] top-[20%]" },
              { system: systems[1], pos: "right-[10%] top-[20%]" },

              { system: systems[2], pos: "left-[10%] bottom-[2%]" },
              { system: systems[4], pos: "right-[10%] bottom-[2%]" },

              { system: systems[3], pos: "left-1/2 -translate-x-1/2 top-0" },
            ].map(({ system, pos }) => (
              <motion.button
                key={system.id}
                onMouseEnter={() => setSelected(system)}
                onClick={() => setSelected(system)}
                whileHover={{ scale: 1.08 }}
                className={`
          absolute
          ${pos}
          w-20 h-20
          sm:w-24 sm:h-24
          md:w-28 md:h-28
          lg:w-36 lg:h-36
          rounded-full
          bg-white
          dark:bg-white/5
          border
          border-black/5
          dark:border-white/10
          backdrop-blur-xl
          shadow-xl
          flex
          flex-col
          items-center
          justify-center
          z-10
        `}
              >
                <div className="text-cyan-500 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {system.icon}
                </div>

                <span
                  className="
            text-[10px]
            sm:text-xs
            md:text-sm
            lg:text-xl
            mt-2
            text-center
            px-2
            leading-tight
          "
                >
                  {system.short}
                </span>
              </motion.button>
            ))}
          </div>

          {/* DETAILS PANEL */}
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              rounded-3xl
              border border-black/5 dark:border-white/10
              bg-white/80 dark:bg-white/5
              backdrop-blur-xl
              p-8
              shadow-xl
            "
          >
            <div className="text-cyan-500 text-4xl mb-4">{selected.icon}</div>

            <h3 className="text-3xl font-bold text-gray-950 dark:text-white">
              {selected.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-600 dark:text-white/70">
              {selected.description}
            </p>

            <div className="mt-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-sm text-gray-500 dark:text-white/50">
                Active Automation System
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
