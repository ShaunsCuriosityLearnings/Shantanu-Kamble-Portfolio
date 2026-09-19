"use client";

import React from "react";
import {
  FiSearch,
  FiFileText,
  FiLayout,
  FiCode,
  FiRefreshCw,
  FiCheckCircle,
} from "react-icons/fi";

interface RedesignProcessSkillsProps {
  headingFontClass: string;
  scriptFontClass: string;
}

export default function RedesignProcessSkills({
  headingFontClass,
  scriptFontClass,
}: RedesignProcessSkillsProps) {
  const skillsList = [
    "NEXT.JS",
    "REACT",
    "TYPESCRIPT",
    "TAILWIND CSS",
    "NODE.JS",
    "PYTHON",
    "AI CHATBOTS",
    "WHATSAPP AUTOMATION",
    "META ADS",
    "GOOGLE ADS",
    "SEO & FUNNELS",
    "MERN STACK",
    "REST APIS",
    "SYSTEM ARCHITECTURE",
    "UI/UX DESIGN",
    "PERFORMANCE MARKETING",
  ];

  const workProcess = [
    {
      title: "Discover",
      desc: "Requirements, market research & goals",
      icon: <FiSearch />,
    },
    {
      title: "Plan",
      desc: "System architecture & conversion funnels",
      icon: <FiFileText />,
    },
    {
      title: "Design",
      desc: "High-fidelity UI, component systems & UX",
      icon: <FiLayout />,
    },
    {
      title: "Develop",
      desc: "Scalable frontend, robust APIs & databases",
      icon: <FiCode />,
    },
    {
      title: "Automate",
      desc: "AI workflows, lead triage & ad tracking",
      icon: <FiRefreshCw />,
    },
    {
      title: "Deliver",
      desc: "Performance tuning & business scale",
      icon: <FiCheckCircle />,
    },
  ];

  return (
    <section className="w-full px-[4%] sm:px-[5%] py-8 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ================= COLUMN 1: EDUCATION & SKILLS ================= */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <h3
              className={`${headingFontClass} text-xl sm:text-2xl font-bold uppercase tracking-wider text-white`}
            >
              Education & Background
            </h3>
            <p className="text-xs uppercase tracking-widest text-red-500 font-bold mt-0.5">
              QUALIFICATIONS
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-b border-zinc-800/80 pb-3">
              <div className="flex justify-between items-baseline gap-2">
                <h4 className="text-xs font-bold text-white">
                  Full Stack & System Architecture
                </h4>
                <span className="text-[11px] text-red-500 font-mono font-bold">
                  2022-24
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                Modern Web Technologies, Next.js, MERN Stack, Scalable APIs & Cloud
              </p>
            </div>

            <div className="border-b border-zinc-800/80 pb-3">
              <div className="flex justify-between items-baseline gap-2">
                <h4 className="text-xs font-bold text-white">
                  AI Automations & Performance Marketing
                </h4>
                <span className="text-[11px] text-red-500 font-mono font-bold">
                  2024-26
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                Conversational AI Agents, Meta & Google Ads, WhatsApp Automation Systems
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-red-500 font-bold mb-3">
              PRIMARY STACK PILLS
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skillsList.map((skill, index) => (
                <span
                  key={index}
                  className="text-[9px] font-mono font-medium px-2.5 py-1 rounded-full border border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:text-white hover:border-red-500/40 hover:bg-red-950/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= COLUMN 2: WORK PROCESS STEPPER ================= */}
        <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-zinc-900 lg:pl-8">
          <div>
            <h3
              className={`${headingFontClass} text-xl sm:text-2xl font-bold uppercase tracking-wider text-white`}
            >
              Work Process
            </h3>
            <p className="text-xs uppercase tracking-widest text-red-500 font-bold mt-0.5">
              STEP-BY-STEP METHODOLOGY
            </p>
          </div>

          <div className="relative space-y-4 pt-1">
            <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-red-600 via-zinc-800 to-red-600/40" />

            {workProcess.map((step, index) => (
              <div key={index} className="relative flex items-start gap-3.5 group">
                <div className="relative z-10 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-700 group-hover:border-red-500 text-red-500 group-hover:text-red-400 flex items-center justify-center text-xs shadow-md transition-colors shrink-0">
                  {step.icon}
                </div>

                <div className="pt-0.5">
                  <h4 className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= COLUMN 3: TEXTURED QUOTE BOX ================= */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="relative w-full h-full min-h-[320px] rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden border border-red-500/20 bg-gradient-to-br from-[#38070e] via-[#1a0508] to-[#0d0305] shadow-[0_10px_40px_rgba(185,28,28,0.15)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.25),transparent_60%)] pointer-events-none" />

            <div className="relative z-10 text-red-500 font-serif text-5xl font-bold leading-none select-none">
              “
            </div>

            <div className="relative z-10 my-auto py-4">
              <p className="text-lg sm:text-xl font-light leading-snug text-zinc-100 italic">
                Good design and robust code are not just how a system looks, but
                how reliably it{" "}
                <span className="text-red-400 font-normal not-italic">
                  solves real business problems and scales.
                </span>
              </p>
            </div>

            <div className="relative z-10 space-y-3 pt-3 border-t border-red-500/20">
              <p
                className={`${scriptFontClass} text-2xl sm:text-3xl text-red-400 tracking-wide`}
              >
                Shantanu Kamble
              </p>

              <div>
                <p className="text-[10px] tracking-widest uppercase font-bold text-white/90">
                  LET'S CREATE SOMETHING GREAT TOGETHER.
                </p>
                <span className="text-red-500 font-bold text-base">+</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
