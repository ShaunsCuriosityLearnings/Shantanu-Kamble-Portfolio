"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaBullhorn,
  FaWhatsapp,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";

interface RedesignAutomationProps {
  headingFontClass: string;
}

const systems = [
  {
    id: 1,
    title: "Lead Qualification Chatbots",
    icon: <FaRobot />,
    short: "AI Leads",
    role: "Meta & Google Ads Integration",
    description:
      "Intelligent conversational bots handling 24/7 client triage, dynamic catalog exploration, CRM syncing, and automated lead scoring from Meta and Google Ads, eliminating manual cold calling.",
  },
  {
    id: 2,
    title: "Marketing & Sales Automation",
    icon: <FaBullhorn />,
    short: "Sales Bots",
    role: "Automated Conversion Funnels",
    description:
      "Autonomous conversational funnels driving automated lead nurturing, appointment scheduling, WhatsApp follow-ups, and targeted customer journey workflows.",
  },
  {
    id: 3,
    title: "Student Management Systems",
    icon: <FaGraduationCap />,
    short: "EdTech AI",
    role: "Automated Academic Systems",
    description:
      "Educational AI platforms featuring role-based portals, LLM doubt-solving assistants, interactive quiz modules, attendance tracking, and parent telemetry dashboards.",
  },
  {
    id: 4,
    title: "Survey & Research Bots",
    icon: <FaChartLine />,
    short: "Research AI",
    role: "Conversational Analytics",
    description:
      "Interactive survey agents replacing boring forms. Gathers qualitative user feedback, segments responses, and streams live analytics into business dashboards.",
  },
  {
    id: 5,
    title: "WhatsApp Automation Workflows",
    icon: <FaWhatsapp />,
    short: "WhatsApp AI",
    role: "Cloud API Orchestration",
    description:
      "Official WhatsApp Cloud API automation systems for instant customer communication, broadcast campaigns, payment links, reminders, and appointment scheduling.",
  },
];

export default function RedesignAutomation({
  headingFontClass,
}: RedesignAutomationProps) {
  const [selected, setSelected] = useState(systems[0]);

  return (
    <section id="automation" className="w-full px-[4%] sm:px-[5%] py-8 border-t border-zinc-900">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="text-xs uppercase tracking-widest text-red-500 font-bold">
          INTELLIGENT SYSTEMS
        </span>
        <h2
          className={`${headingFontClass} text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-1`}
        >
          AI Automation Ecosystem
        </h2>
      </div>

      {/* INTERACTIVE TOPOLOGY & DETAILS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT: SVG INTERACTIVE TOPOLOGY */}
        <div className="lg:col-span-7 relative h-[360px] sm:h-[420px] md:h-[460px] w-full flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
            <line x1="400" y1="300" x2="200" y2="150" stroke="#ef233c44" strokeWidth="2" />
            <line x1="400" y1="300" x2="600" y2="150" stroke="#ef233c44" strokeWidth="2" />
            <line x1="400" y1="300" x2="600" y2="470" stroke="#ef233c44" strokeWidth="2" />
            <line x1="400" y1="300" x2="200" y2="470" stroke="#ef233c44" strokeWidth="2" />
            <line x1="400" y1="300" x2="400" y2="70" stroke="#ef233c44" strokeWidth="2" />
          </svg>

          {/* CENTER: PULSING "AI CORE" */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-red-500/50 bg-gradient-to-br from-red-950/80 via-black to-black backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_60px_rgba(239,35,60,0.35)] z-20"
          >
            <div className="text-xl text-red-400 animate-pulse">⚡</div>
            <h3 className="text-xs font-black text-white tracking-widest mt-1">
              AI CORE
            </h3>
            <p className="text-[8px] text-red-400/80 uppercase font-mono">
              Engine
            </p>
          </motion.div>

          {/* 5 SURROUNDING NODES */}
          {[
            { system: systems[0], pos: "left-[8%] top-[18%]" },
            { system: systems[1], pos: "right-[8%] top-[18%]" },
            { system: systems[2], pos: "left-[8%] bottom-[4%]" },
            { system: systems[4], pos: "right-[8%] bottom-[4%]" },
            { system: systems[3], pos: "left-1/2 -translate-x-1/2 top-2" },
          ].map(({ system, pos }) => {
            const isSelected = selected.id === system.id;
            return (
              <motion.button
                key={system.id}
                onMouseEnter={() => setSelected(system)}
                onClick={() => setSelected(system)}
                whileHover={{ scale: 1.1 }}
                className={`
                  absolute
                  ${pos}
                  w-16 h-16 sm:w-20 sm:h-20
                  rounded-2xl
                  ${
                    isSelected
                      ? "bg-red-950/80 border-red-500 text-white shadow-[0_0_25px_rgba(239,35,60,0.4)]"
                      : "bg-[#101014] border-zinc-800 text-zinc-400 hover:border-red-500/40 hover:text-white"
                  }
                  border
                  backdrop-blur-xl
                  shadow-xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  z-10
                  cursor-pointer
                `}
              >
                <div className={`text-base ${isSelected ? "text-red-400" : "text-zinc-400"}`}>
                  {system.icon}
                </div>
                <span className="text-[9px] font-mono font-bold tracking-tight mt-1 text-center px-1">
                  {system.short}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* RIGHT: LIVE INSPECTION PANEL */}
        <div className="lg:col-span-5">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-[#1c080d] via-[#101014] to-black p-6 sm:p-7 shadow-[0_15px_45px_rgba(185,28,28,0.18)]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="text-[9px] font-mono font-bold text-red-400 bg-red-950/80 border border-red-500/30 px-2.5 py-0.5 rounded-full uppercase">
                {selected.role}
              </span>
              <span className="flex items-center gap-1.5 text-[9px] text-green-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                ACTIVE NODE
              </span>
            </div>

            <div className="pt-4">
              <div className="text-2xl text-red-500 mb-2">
                {selected.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {selected.title}
              </h3>

              <p className="text-xs text-zinc-300 mt-2.5 leading-relaxed">
                {selected.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>NODE ID: #{String(selected.id).padStart(2, "0")}</span>
              <span className="text-red-400 font-bold">HOVER / CLICK NODES</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
