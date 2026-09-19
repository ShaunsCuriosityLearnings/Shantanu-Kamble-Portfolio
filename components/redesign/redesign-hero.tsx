"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FiPlus, FiMapPin } from "react-icons/fi";

interface RedesignHeroProps {
  headingFontClass: string;
  scriptFontClass: string;
}

export default function RedesignHero({
  headingFontClass,
  scriptFontClass,
}: RedesignHeroProps) {
  const capabilities = [
    "Full-Stack Web Engineering",
    "AI Agents & Automation Workflows",
    "Performance Marketing & Paid Ads",
    "Pixel-Perfect Responsive Systems",
  ];

  return (
    <section className="relative w-full px-[4%] sm:px-[5%] pt-1 pb-8 overflow-hidden">
      {/* 1. GIANT BACKGROUND TEXT "PORTFOLIO" */}
      <div className="absolute inset-x-0 top-1 select-none pointer-events-none flex justify-center z-0 overflow-hidden">
        <span
          className={`
            ${headingFontClass}
            text-[17vw]
            leading-none
            tracking-tighter
            font-black
            text-[#750d1a]
            opacity-90
            transform
            scale-y-110
          `}
          style={{ textShadow: "0 0 100px rgba(185, 28, 28, 0.3)" }}
        >
          PORTFOLIO
        </span>
      </div>

      {/* 2. SUBTLE CRIMSON AMBIENT LIGHT */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* 3. HERO CONTENT GRID */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px] lg:min-h-[520px] pt-4 sm:pt-6">
        
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 space-y-4 text-left order-2 lg:order-1"
        >
          <p
            className={`${scriptFontClass} text-3xl sm:text-4xl text-red-500 tracking-wide`}
          >
            Hello, I'm
          </p>

          <div className="space-y-1">
            <h1
              className={`${headingFontClass} text-5xl sm:text-7xl font-extrabold uppercase tracking-tight text-white leading-none`}
            >
              Shantanu
            </h1>
            <h2
              className={`${headingFontClass} text-2xl sm:text-3xl font-bold uppercase tracking-wide text-zinc-300 leading-tight`}
            >
              Software & AI Developer
            </h2>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
            I engineer scalable web architectures, intelligent AI automation
            workflows, and high-converting performance marketing funnels. From
            modern code to client acquisition, I build systems that connect and
            scale.
          </p>

          <div className="pt-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/80 text-xs font-semibold uppercase tracking-wider text-zinc-300 shadow-lg">
              <FiMapPin className="text-red-500 text-sm" />
              <span>BASED IN INDIA</span>
            </div>
          </div>
        </motion.div>

        {/* CENTER COLUMN: EDITORIAL PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-4 relative flex justify-center items-end order-1 lg:order-2 min-h-[340px] sm:min-h-[440px]"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[370px] aspect-[3/4] flex items-end justify-center">
            {/* Red rim lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/25 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden flex flex-col justify-end">
              <div className="relative w-full h-full bg-gradient-to-t from-black via-zinc-900/60 to-transparent flex items-end justify-center">
                <svg
                  viewBox="0 0 400 520"
                  className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Jacket */}
                  <path
                    d="M60 520 C70 420, 110 330, 150 280 C170 260, 230 260, 250 280 C290 330, 330 420, 340 520 Z"
                    fill="#111115"
                  />
                  {/* Lapels */}
                  <path
                    d="M150 280 L185 390 L200 390 L215 390 L250 280 L230 265 L200 310 L170 265 Z"
                    fill="#1a1a20"
                  />
                  <path d="M185 390 L200 480 L215 390 Z" fill="#0c0c0f" />
                  {/* Collar */}
                  <path
                    d="M175 270 Q200 300 225 270 L220 250 Q200 260 180 250 Z"
                    fill="#08080a"
                  />
                  {/* Neck */}
                  <rect x="180" y="210" width="40" height="60" rx="8" fill="#d97768" opacity="0.85" />
                  {/* Head */}
                  <path
                    d="M160 160 C160 230, 175 240, 200 240 C225 240, 240 230, 240 160 C240 110, 225 80, 200 80 C175 80, 160 110, 160 160 Z"
                    fill="#e28878"
                  />
                  {/* Dark hair */}
                  <path
                    d="M150 140 C145 90, 175 50, 200 50 C225 50, 255 90, 250 140 C245 110, 230 80, 200 80 C170 80, 155 110, 150 140 Z"
                    fill="#08080a"
                  />
                  <path
                    d="M152 110 Q200 70 248 110 Q240 90 200 75 Q160 90 152 110 Z"
                    fill="#151518"
                  />
                  {/* Sunglasses */}
                  <rect x="165" y="145" width="32" height="18" rx="4" fill="#000000" />
                  <rect x="203" y="145" width="32" height="18" rx="4" fill="#000000" />
                  <rect x="195" y="150" width="10" height="4" fill="#111111" />
                  <line x1="168" y1="147" x2="190" y2="159" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
                  <line x1="206" y1="147" x2="228" y2="159" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
                  <line x1="190" y1="205" x2="210" y2="205" stroke="#993d3d" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070709] via-[#070709]/85 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-4 space-y-6 text-left order-3"
        >
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full border border-red-500/30 bg-red-950/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(239,35,60,0.15)]">
              <FiPlus className="text-lg" />
            </div>
            <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed">
              Turning complex business challenges into high-impact digital systems
              that scale revenue.
            </p>
          </div>

          <div className="space-y-3 pt-2 border-t border-zinc-800/80">
            {capabilities.map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <span className="text-red-500 font-bold text-base leading-none group-hover:scale-125 transition-transform duration-200">
                  +
                </span>
                <span className="text-zinc-300 text-xs sm:text-sm font-medium tracking-wide group-hover:text-white transition">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:scale-105"
            >
              <span>Explore Projects</span>
              <BsArrowRight className="text-sm" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
