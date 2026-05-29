"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center px-6 pt-12 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* STATUS */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm text-gray-600 dark:text-white/70">
              Available for projects
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-5xl sm:text-7xl font-bold leading-tight text-gray-950 dark:text-white">
            Building
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Digital Experiences
            </span>
            That Scale Businesses
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg text-gray-700 dark:text-white/70 leading-relaxed max-w-2xl">
            Hi, I'm{" "}
            <span className="font-semibold text-gray-950 dark:text-white">
              Shantanu Kamble
            </span>{" "}
            — a Performance Marketer, Software Developer, and AI Enthusiast
            helping brands grow through high-converting ads, scalable websites,
            and automation-driven systems.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-8 mt-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-950 dark:text-white">
                ₹10L+
              </h2>
              <p className="text-gray-500 dark:text-white/60 text-sm">
                Ad Spend Managed
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-950 dark:text-white">
                20+
              </h2>
              <p className="text-gray-500 dark:text-white/60 text-sm">
                Projects Built
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-950 dark:text-white">
                AI + Tech
              </h2>
              <p className="text-gray-500 dark:text-white/60 text-sm">
                Focused Solutions
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="#contact"
              className="group bg-gray-950 text-white dark:bg-white dark:text-black px-7 py-4 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition"
            >
              Let's Work Together
              <BsArrowRight className="group-hover:translate-x-1 transition" />
            </Link>

            <a
              href="/Shantanu Kamble Resume_2026-2025.pdf"
              download
              className="border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md px-7 py-4 rounded-full flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              Download CV
              <HiDownload />
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-xl hover:scale-110 transition backdrop-blur-md"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-2xl hover:scale-110 transition backdrop-blur-md"
            >
              <FaGithubSquare />
            </a>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* GLOW */}
          <div className="absolute w-[450px] h-[450px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

          {/* CARD */}
          <div className="relative z-10 w-full max-w-md rounded-[2rem] border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                  What I Do
                </h3>

                <span className="text-sm text-green-500">Scaling Brands</span>
              </div>

              <div className="space-y-4">
                {[
                  "Performance Marketing",
                  "Meta & Google Ads",
                  "Website Development",
                  "AI Automations",
                  "POS Systems with Odoo",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.05] dark:border-white/5 hover:bg-black/[0.05] dark:hover:bg-white/10 transition"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-gray-500 dark:text-white/60 text-sm">
                  Based in India
                </span>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-sm text-gray-950 dark:text-white">
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
