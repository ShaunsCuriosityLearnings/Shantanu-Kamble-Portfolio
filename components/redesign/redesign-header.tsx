"use client";

import React from "react";
import Link from "next/link";

export default function RedesignHeader() {
  return (
    <header className="w-full px-[4%] sm:px-[5%] pt-4 pb-2 flex items-center justify-between text-xs tracking-widest font-semibold uppercase relative z-30">
      {/* LEFT META */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-zinc-400">
        <span className="text-red-500 font-bold">SOFTWARE DEVELOPER</span>
        <span className="hidden sm:inline text-zinc-700">/</span>
        <span className="text-zinc-400">AI & PERFORMANCE MARKETER</span>
      </div>

      {/* RIGHT CTA / AVAILABILITY */}
      <Link
        href="#contact"
        className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-950/20 hover:bg-red-900/30 hover:border-red-500/40 text-red-400 hover:text-red-300 transition duration-300 text-[11px] font-bold tracking-wider"
      >
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span>AVAILABLE FOR PROJECTS</span>
        <span className="text-red-400 font-bold group-hover:rotate-45 transition-transform duration-300">
          +
        </span>
      </Link>
    </header>
  );
}
