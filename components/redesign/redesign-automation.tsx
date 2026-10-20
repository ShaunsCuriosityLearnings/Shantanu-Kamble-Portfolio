"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaRobot,
  FaBullhorn,
  FaWhatsapp,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";
import {
  BsArrowRight,
  BsCheckCircleFill,
} from "react-icons/bs";

interface RedesignAutomationProps {
  headingFontClass: string;
}

// 5 nodes symmetrically distributed at R = 175 in a 500x500 coordinate space
// Clean, balanced layout with exact 72° mathematical intervals
const systems = [
  {
    id: 1,
    title: "Lead Qualification Chatbots",
    icon: <FaRobot />,
    short: "AI Leads",
    role: "Meta & Google Ads Integration",
    x: 84,
    y: 196,
    pos: "left-[16.8%] top-[39.2%]",
    description:
      "Intelligent conversational bots handling 24/7 client triage, dynamic catalog exploration, CRM syncing, and automated lead scoring from Meta and Google Ads, eliminating manual cold calling.",
    tech: ["Meta Ads Webhooks", "CRM Sync", "Lead Scoring", "Instant Triage", "FastAPI"],
    metrics: "24/7 Triage • Zero Cold Calling",
  },
  {
    id: 2,
    title: "Marketing & Sales Automation",
    icon: <FaBullhorn />,
    short: "Sales Bots",
    role: "Automated Conversion Funnels",
    x: 416,
    y: 196,
    pos: "left-[83.2%] top-[39.2%]",
    description:
      "Autonomous conversational funnels driving automated lead nurturing, appointment scheduling, WhatsApp follow-ups, and targeted customer journey workflows.",
    tech: ["Calendly Sync", "Drip Workflows", "WhatsApp Nurturing", "Sales Pipeline", "Make.com"],
    metrics: "Instant Booking • Dynamic Drips",
  },
  {
    id: 3,
    title: "WhatsApp Automation Workflows",
    icon: <FaWhatsapp />,
    short: "WhatsApp AI",
    role: "Cloud API Orchestration",
    x: 353,
    y: 392,
    pos: "left-[70.6%] top-[78.4%]",
    description:
      "Official WhatsApp Cloud API automation systems for instant customer communication, broadcast campaigns, payment links, reminders, and appointment scheduling.",
    tech: ["Meta Cloud API", "Template Messages", "Payment Links", "Auto-Reminders", "Node.js"],
    metrics: "Official Cloud API • Instant Broadcasts",
  },
  {
    id: 4,
    title: "Student Management Systems",
    icon: <FaGraduationCap />,
    short: "EdTech AI",
    role: "Automated Academic Systems",
    x: 147,
    y: 392,
    pos: "left-[29.4%] top-[78.4%]",
    description:
      "Educational AI platforms featuring role-based portals, LLM doubt-solving assistants, interactive quiz modules, attendance tracking, and parent telemetry dashboards.",
    tech: ["LLM Doubt Solver", "Quiz Engine", "Role-based Auth", "Student Telemetry", "Next.js"],
    metrics: "LLM Doubt Solver • Real-time Reports",
  },
  {
    id: 5,
    title: "Survey & Research Bots",
    icon: <FaChartLine />,
    short: "Research AI",
    role: "Conversational Analytics",
    x: 250,
    y: 75,
    pos: "left-[50%] top-[15%]",
    description:
      "Interactive survey agents replacing boring forms. Gathers qualitative user feedback, segments responses, and streams live analytics into business dashboards.",
    tech: ["Dynamic Branching", "Sentiment Scoring", "Live BI Dashboards", "CSV/CRM Export", "PostgreSQL"],
    metrics: "85%+ Completion Rate • Live BI",
  },
];

export default function RedesignAutomation({
  headingFontClass,
}: RedesignAutomationProps) {
  const [selected, setSelected] = useState(systems[0]);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Auto-cycle demo every 4.5 seconds unless user manually interacts
  useEffect(() => {
    if (isUserInteracting) return;
    const interval = setInterval(() => {
      setSelected((prev) => {
        const nextIdx = (systems.findIndex((s) => s.id === prev.id) + 1) % systems.length;
        return systems[nextIdx];
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  return (
    <section
      id="automation"
      className="w-full px-[4%] sm:px-[5%] py-12 lg:py-16 border-t border-zinc-900 relative"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
        <span className="text-xs uppercase tracking-widest text-red-500 font-bold">
          INTELLIGENT SYSTEMS
        </span>
        <h2
          className={`${headingFontClass} text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white mt-1`}
        >
          AI Automation Ecosystem
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl mx-auto leading-relaxed">
          Connected autonomous workflows, customer triage agents, and messaging pipelines orchestrated through a central AI engine.
        </p>
      </div>

      {/* PROPORTIONAL, COMPACT 2-COLUMN GRID (MAX-W-6XL FOR BALANCED DESKTOP VIEW) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-6xl mx-auto">
        {/* LEFT COLUMN: BALANCED INTERACTIVE TOPOLOGY MATRIX */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          {/* Subtle ambient radial red glow */}
          <div className="absolute w-[360px] lg:w-[440px] h-[360px] lg:h-[440px] bg-red-600/10 blur-[110px] rounded-full pointer-events-none -z-10" />

          {/* TOPOLOGY BOX (CLEAN, PROPER PROPORTIONS: ~450px ON DESKTOP) */}
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] aspect-square mx-auto flex items-center justify-center select-none">
            {/* SVG CONNECTION MATRIX */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 500"
            >
              <defs>
                <filter id="crimsonGlowProper" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#ef233c" />
                  <stop offset="100%" stopColor="#9b111e" />
                </linearGradient>
              </defs>

              {/* Decorative outer boundary ring */}
              <circle
                cx="250"
                cy="250"
                r="225"
                fill="none"
                stroke="#ef233c"
                strokeWidth="0.75"
                strokeDasharray="2 8"
                opacity="0.18"
              />

              {/* Main orbit ring intersecting all nodes */}
              <circle
                cx="250"
                cy="250"
                r="175"
                fill="none"
                stroke="#ef233c"
                strokeWidth="1.25"
                strokeDasharray="4 6"
                opacity="0.22"
              />

              {/* Inner reactor halo */}
              <circle
                cx="250"
                cy="250"
                r="100"
                fill="none"
                stroke="#ef233c"
                strokeWidth="1"
                strokeDasharray="3 5"
                opacity="0.25"
              />

              {/* Base connecting lines */}
              {systems.map((s) => {
                const isSelected = selected.id === s.id;
                return (
                  <line
                    key={`line-${s.id}`}
                    x1="250"
                    y1="250"
                    x2={s.x}
                    y2={s.y}
                    stroke={isSelected ? "#ef233c" : "#3f3f46"}
                    strokeWidth={isSelected ? 3 : 1.2}
                    strokeDasharray={isSelected ? undefined : "3 3"}
                    opacity={isSelected ? 1 : 0.35}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Active pulsing laser beam & traveling photons */}
              {selected && (
                <>
                  <line
                    x1="250"
                    y1="250"
                    x2={selected.x}
                    y2={selected.y}
                    stroke="url(#laserGrad)"
                    strokeWidth="3.5"
                    filter="url(#crimsonGlowProper)"
                    opacity="0.95"
                  />
                  {/* Outer pulse */}
                  <circle r="6" fill="#ffffff" filter="url(#crimsonGlowProper)">
                    <animateMotion
                      path={`M 250 250 L ${selected.x} ${selected.y}`}
                      dur="1.1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Core photon */}
                  <circle r="3.5" fill="#ef233c">
                    <animateMotion
                      path={`M 250 250 L ${selected.x} ${selected.y}`}
                      dur="1.1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </>
              )}
            </svg>

            {/* CENTER: BALANCED AI CORE ENGINE */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-red-500/70 bg-gradient-to-br from-[#3b0811] via-[#15070a] to-black backdrop-blur-2xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(239,35,60,0.45)] z-20 pointer-events-none"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl text-red-400 animate-pulse">
                ⚡
              </span>
              <h3 className="text-xs sm:text-sm font-black text-white tracking-widest mt-0.5">
                AI CORE
              </h3>
              <p className="text-[8px] sm:text-[9px] text-red-400 font-mono tracking-wider uppercase font-semibold">
                ENGINE
              </p>
            </motion.div>

            {/* 5 SURROUNDING NODES (PROPER, BALANCED PROPORTIONS) */}
            {systems.map((s) => {
              const isSelected = selected.id === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onMouseEnter={() => {
                    setIsUserInteracting(true);
                    setSelected(s);
                  }}
                  onClick={() => {
                    setIsUserInteracting(true);
                    setSelected(s);
                  }}
                  className={`
                    absolute
                    ${s.pos}
                    -translate-x-1/2 -translate-y-1/2
                    w-18 h-18 sm:w-20 sm:h-20 lg:w-24 lg:h-24
                    rounded-2xl
                    ${
                      isSelected
                        ? "bg-red-950/95 border-red-500 text-white shadow-[0_0_30px_rgba(239,35,60,0.6)] scale-110 z-30 ring-2 ring-red-500/50"
                        : "bg-[#101014] border-zinc-800 text-zinc-400 hover:border-red-500/50 hover:text-white z-10"
                    }
                    border
                    backdrop-blur-xl
                    flex
                    flex-col
                    items-center
                    justify-center
                    p-2
                    transition-all
                    duration-300
                    cursor-pointer
                  `}
                >
                  <div
                    className={`text-xl sm:text-2xl transition-transform ${
                      isSelected ? "text-red-400 scale-110" : "text-zinc-400"
                    }`}
                  >
                    {s.icon}
                  </div>
                  <span
                    className={`text-[9px] sm:text-[10px] lg:text-xs font-mono font-bold tracking-tight mt-1 text-center px-1 leading-tight ${
                      isSelected ? "text-white" : "text-zinc-300"
                    }`}
                  >
                    {s.short}
                  </span>
                </button>
              );
            })}
          </div>

          {/* MOBILE/TABLET QUICK SWITCHER PILLS */}
          <div className="flex lg:hidden items-center justify-center gap-1.5 flex-wrap mt-6 pt-3 border-t border-zinc-900 w-full">
            <span className="text-[9px] font-mono uppercase text-zinc-500 w-full text-center mb-1">
              Select an automated workflow:
            </span>
            {systems.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setIsUserInteracting(true);
                  setSelected(s);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                  selected.id === s.id
                    ? "bg-red-600 text-white border-red-500 font-bold shadow-[0_0_15px_rgba(239,35,60,0.4)]"
                    : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                <span className="text-sm">{s.icon}</span>
                <span>{s.short}</span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: PROPER, SLEEK INSPECTION HUD */}
        <div className="lg:col-span-6 h-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-[#1c080d] via-[#101014] to-black p-6 sm:p-7 lg:p-8 shadow-[0_15px_45px_rgba(185,28,28,0.2)] flex flex-col justify-between min-h-[380px] lg:min-h-[440px]"
            >
              {/* TOP HEADER */}
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800">
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-red-400 bg-red-950/80 border border-red-500/30 px-3 py-0.5 rounded-full uppercase">
                    {`NODE #0${selected.id} • ${selected.role}`}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-emerald-400 font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    ACTIVE NODE
                  </span>
                </div>

                {/* MAIN CONTENT */}
                <div className="py-5 space-y-3.5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-red-950/70 border border-red-500/40 text-red-400 flex items-center justify-center text-2xl lg:text-3xl shadow-[0_0_15px_rgba(239,35,60,0.3)] shrink-0">
                      {selected.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                        {selected.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-mono text-red-400/90 font-semibold mt-0.5">
                        {selected.metrics}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                    {selected.description}
                  </p>

                  {/* INTEGRATION STACK PILLS */}
                  <div className="pt-2">
                    <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                      Key Integrations & Architecture:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selected.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1.5"
                        >
                          <BsCheckCircleFill className="text-red-500 text-[9px]" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER & DIRECT ACTION */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <span className="text-[10px] sm:text-xs text-zinc-500 font-mono">
                  STATUS: LIVE & PRODUCTION READY
                </span>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 border border-red-500 text-xs font-mono font-bold text-white hover:bg-red-500 hover:shadow-[0_0_15px_rgba(239,35,60,0.5)] transition-all group shadow-sm"
                >
                  <span>Request Custom Bot</span>
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
