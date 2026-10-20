"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import {
  BsArrowUpRight,
  BsX,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

interface RedesignProjectsProps {
  headingFontClass: string;
}

type ProjectItem = (typeof projectsData)[number];

const ITEMS_PER_PAGE = 4;

export default function RedesignProjects({
  headingFontClass,
}: RedesignProjectsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const modalViewportRef = useRef<HTMLDivElement>(null);
  const [modalScale, setModalScale] = useState(1);
  const [viewportDimensions, setViewportDimensions] = useState({ width: 1280, height: 800 });

  // Touch swipe states
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);
  const currentProjects = projectsData.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Handle touch swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      handleNextPage();
    } else if (distance < -45) {
      handlePrevPage();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Responsive desktop mode scaling calculation
  useEffect(() => {
    const updateDimensions = () => {
      if (modalViewportRef.current) {
        const width = modalViewportRef.current.clientWidth || window.innerWidth;
        const height = modalViewportRef.current.clientHeight || window.innerHeight * 0.85;
        const scale = width < 1280 ? width / 1280 : 1;
        setModalScale(scale);
        setViewportDimensions({ width, height });
      }
    };

    updateDimensions();
    const timer = setTimeout(updateDimensions, 60);
    window.addEventListener("resize", updateDimensions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [activeModalProject]);

  // Keyboard navigation & Esc to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModalProject]);

  return (
    <section id="projects" className="w-full px-[4%] sm:px-[5%] py-8">
      {/* SECTION HEADER WITH PAGE TABS & ARROWS */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
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

        {/* COMPACT PAGE NAVIGATION TABS */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              title="Previous 4 Projects"
            >
              <BsChevronLeft className="text-xs" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentPage(idx)}
                className={`text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  currentPage === idx
                    ? "bg-red-600 text-white font-bold shadow-[0_0_12px_rgba(239,35,60,0.5)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {String(idx * 4 + 1).padStart(2, "0")}–
                {String(Math.min((idx + 1) * 4, projectsData.length)).padStart(2, "0")}
              </button>
            ))}

            <button
              type="button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              title="Next 4 Projects"
            >
              <BsChevronRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>

      {/* 4-BOXES GRID WITH SWIPE & PAGE SLIDE (2x2 on mobile, 4x1 on desktop) */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4.5"
          >
            {currentProjects.map((project, index) => {
              const globalIndex = currentPage * ITEMS_PER_PAGE + index;
              const numStr = String(globalIndex + 1).padStart(2, "0");
              const isFeatured = globalIndex < 4;

              return (
                <div
                  key={project.title}
                  onClick={() => setActiveModalProject(project)}
                  className={`group flex flex-col justify-between rounded-xl border ${
                    isFeatured
                      ? "border-red-500/30 bg-gradient-to-b from-[#18080c] via-[#101014] to-[#0d0d10]"
                      : "border-zinc-800/90 bg-[#101014]"
                  } p-2.5 sm:p-3.5 transition-all duration-300 hover:border-red-500/60 hover:shadow-[0_10px_30px_rgba(225,29,72,0.18)] overflow-hidden cursor-pointer`}
                >
                  {/* IMAGE PREVIEW */}
                  <div className="relative w-full h-28 sm:h-38 md:h-44 rounded-lg overflow-hidden mb-2.5 sm:mb-3 bg-zinc-900 border border-white/10 group-hover:border-red-500/50 transition-colors">
                    {project.imageUrl && (
                      <>
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity" />
                      </>
                    )}

                    {/* Top badges */}
                    <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 z-10">
                      <span className="text-[8px] sm:text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-red-400">
                        {numStr}
                      </span>
                    </div>

                    <span className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 z-10 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white flex items-center justify-center text-[9px] sm:text-[10px] opacity-80 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110">
                      <BsArrowUpRight />
                    </span>

                    {/* Bottom link preview indicator */}
                    <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 z-10 text-[7px] sm:text-[9px] font-mono font-medium px-1.5 sm:px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-zinc-300 group-hover:text-white transition-colors">
                      LIVE SITE ↗
                    </div>
                  </div>

                  {/* CARD INFO */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors tracking-tight line-clamp-1">
                          {project.title}
                        </h3>
                        <span className="text-xs text-red-500 font-bold shrink-0 hidden sm:inline">
                          →
                        </span>
                      </div>

                      <p className="text-[10px] sm:text-[11px] text-zinc-400 mt-1 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-1 mt-2.5 pt-2 border-t border-zinc-900">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[7px] sm:text-[8px] font-mono bg-zinc-900/90 text-zinc-400 border border-zinc-800 px-1 sm:px-1.5 py-0.5 rounded truncate max-w-[85px] sm:max-w-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* QUICK IN-PORTFOLIO DESKTOP MODE WEBSITE POPUP MODAL       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Modal Dialog (Real Desktop Resolution Browser Frame) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-6xl h-[90vh] bg-[#0d0d12] border border-zinc-800 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden z-10"
            >
              {/* CLEAN BROWSER TOP BAR */}
              <div className="px-4 py-3 bg-[#14141a] border-b border-zinc-800 flex items-center justify-between gap-3 shrink-0">
                {/* Window Dots & Title */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono font-bold text-white hidden sm:inline ml-2 truncate max-w-[200px]">
                    {activeModalProject.title}
                  </span>
                </div>

                {/* Desktop URL Bar */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 max-w-[60%] truncate">
                  <span className="text-emerald-400">🔒</span>
                  <span className="truncate">{activeModalProject.url}</span>
                </div>

                {/* Actions: Direct Link + Close (X) */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeModalProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/40 text-xs font-mono font-bold transition-all"
                    title="Open live site in separate tab"
                  >
                    <span>Open Live Site</span>
                    <FiExternalLink className="text-xs" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-red-600 text-zinc-300 hover:text-white flex items-center justify-center text-xl transition-colors cursor-pointer"
                    title="Close preview (Esc)"
                  >
                    <BsX />
                  </button>
                </div>
              </div>

              {/* QUICK DESKTOP MODE WEBSITE VIEWPORT */}
              <div
                ref={modalViewportRef}
                className="relative flex-1 w-full h-full bg-[#070709] overflow-hidden"
              >
                {/* Instant visual fallback/backdrop so it renders with 0 wait time */}
                {activeModalProject.imageUrl && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={activeModalProject.imageUrl}
                      alt={activeModalProject.title}
                      fill
                      priority
                      className="object-cover object-top opacity-20 filter blur-[1px]"
                    />
                  </div>
                )}

                {/* Scaled Desktop Iframe (Ensures 100% true desktop layout on every screen) */}
                <div
                  className="relative z-10"
                  style={
                    modalScale < 1
                      ? {
                          width: "1280px",
                          height: `${Math.round(viewportDimensions.height / modalScale)}px`,
                          transform: `scale(${modalScale})`,
                          transformOrigin: "top left",
                        }
                      : {
                          width: "100%",
                          height: "100%",
                        }
                  }
                >
                  <iframe
                    src={activeModalProject.url}
                    title={activeModalProject.title}
                    loading="eager"
                    className="w-full h-full border-0 bg-white"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
