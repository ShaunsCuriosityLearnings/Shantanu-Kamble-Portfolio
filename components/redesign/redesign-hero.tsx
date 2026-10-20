"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
      {/* 1. GIANT EDITORIAL HEADER TEXT "PORTFOLIO" */}
      <div className="absolute inset-x-0 top-1 sm:top-1 select-none pointer-events-none flex justify-center z-0 overflow-hidden">
        <span
          className={`
            ${headingFontClass}
            text-[21vw]
            sm:text-[17vw]
            leading-none
            tracking-tight
            font-black
            text-[#8e1220]
            opacity-95
            transform
            scale-y-110
          `}
          style={{ textShadow: "0 0 80px rgba(225, 29, 72, 0.45)" }}
        >
          PORTFOLIO
        </span>
      </div>

      {/* 2. SUBTLE CRIMSON AMBIENT LIGHT */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* 3. HERO CONTENT GRID */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px] lg:min-h-[520px] pt-3 sm:pt-6">
        
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

        {/* CENTER COLUMN: REAL EDITORIAL PORTRAIT (OFFSET ON MOBILE TO KEEP 'PORTFOLIO' BOLDLY VISIBLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-4 relative flex justify-center items-end order-1 lg:order-2 mt-12 sm:mt-10 lg:mt-0"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
            {/* Ambient sunset/crimson glow behind portrait */}
            <div className="absolute -inset-2 bg-gradient-to-t from-red-600/30 via-red-900/10 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" />

            {/* REAL PORTRAIT PHOTO */}
            <Image
              src="/shantanu-hero.jpg"
              alt="Shantanu Kamble"
              fill
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Subtle luxury editorial gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/20 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent pointer-events-none" />
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
