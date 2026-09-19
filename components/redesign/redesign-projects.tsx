"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

interface RedesignProjectsProps {
  headingFontClass: string;
}

export default function RedesignProjects({
  headingFontClass,
}: RedesignProjectsProps) {
  return (
    <section id="projects" className="w-full px-[4%] sm:px-[5%] py-8">
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold">
            SELECTED PROJECTS
          </span>
          <h2
            className={`${headingFontClass} text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-1`}
          >
            Production Systems & Web Apps
          </h2>
        </div>
        <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
          {projectsData.length} Live Projects • 5 in a row
        </span>
      </div>

      {/* 5 CARDS IN A ROW GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5">
        {projectsData.map((project, index) => {
          const numStr = String(index + 1).padStart(2, "0");
          const isFeatured = index < 4;

          return (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (index % 5) * 0.05 }}
              whileHover={{ y: -5 }}
              className={`group flex flex-col justify-between rounded-xl border ${
                isFeatured
                  ? "border-red-500/30 bg-gradient-to-b from-[#18080c] via-[#101014] to-[#0d0d10]"
                  : "border-zinc-800/90 bg-[#101014]"
              } p-3.5 transition-all duration-300 hover:border-red-500/60 hover:shadow-[0_10px_30px_rgba(225,29,72,0.18)] overflow-hidden`}
            >
              {/* IMAGE PREVIEW */}
              <div className="relative w-full h-40 sm:h-44 rounded-lg overflow-hidden mb-3 bg-zinc-900 border border-white/10 group-hover:border-red-500/50 transition-colors">
                {project.imageUrl ? (
                  <>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {/* Subtle top & bottom vignette to keep tags and buttons readable without dimming image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity" />
                  </>
                ) : (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between p-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-mono font-bold text-red-400 bg-red-950/70 border border-red-500/30 px-1.5 py-0.5 rounded">
                        LIVE
                      </span>
                      <span className="text-[10px] text-zinc-500 group-hover:text-red-400 transition-colors">
                        ↗
                      </span>
                    </div>
                    <div className="my-auto text-center py-2">
                      <p className="text-xs font-bold text-white tracking-tight">
                        {project.title}
                      </p>
                      <p className="text-[9px] text-zinc-500 font-mono truncate mt-0.5">
                        {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </p>
                    </div>
                  </div>
                )}

                {/* Top badges: Index & Hover arrow */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-red-400">
                    {numStr}
                  </span>
                </div>

                <span className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110">
                  <BsArrowUpRight />
                </span>

                {/* Bottom link bar */}
                <div className="absolute bottom-2 right-2 z-10 text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-zinc-300 group-hover:text-white transition-colors">
                  LIVE SITE ↗
                </div>
              </div>

              {/* CARD INFO */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors tracking-tight line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="text-xs text-red-500 font-bold shrink-0">→</span>
                  </div>

                  <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-1 mt-3 pt-2.5 border-t border-zinc-900">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[8px] font-mono bg-zinc-900/90 text-zinc-400 border border-zinc-800 px-1.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
